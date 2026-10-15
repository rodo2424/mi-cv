"""Atlas Logístico: análisis reproducible de entregas ficticias con SQLite."""
from __future__ import annotations

import argparse
import csv
import random
import sqlite3
from datetime import date, timedelta
from pathlib import Path

BASE = Path(__file__).resolve().parent
SCHEMA = """
CREATE TABLE entregas (
    entrega_id INTEGER PRIMARY KEY,
    fecha TEXT NOT NULL,
    ciudad TEXT NOT NULL,
    ruta TEXT NOT NULL,
    distancia_km REAL NOT NULL CHECK (distancia_km > 0),
    minutos_planificados INTEGER NOT NULL CHECK (minutos_planificados > 0),
    minutos_reales INTEGER NOT NULL CHECK (minutos_reales > 0),
    costo_bob REAL NOT NULL CHECK (costo_bob >= 0),
    entregada INTEGER NOT NULL CHECK (entregada IN (0, 1))
);
"""
CONSULTA = """
SELECT ciudad, COUNT(*) AS pedidos,
       SUM(entregada) AS entregados,
       ROUND(100.0 * SUM(entregada) / COUNT(*), 1) AS cumplimiento_pct,
       ROUND(AVG(costo_bob), 2) AS costo_promedio_bob,
       ROUND(100.0 * SUM(CASE WHEN entregada = 1 AND minutos_reales <= minutos_planificados
           THEN 1 ELSE 0 END) / NULLIF(SUM(entregada), 0), 1) AS puntualidad_pct
FROM entregas
GROUP BY ciudad
ORDER BY ciudad;
"""

def crear_datos(n: int, semilla: int) -> list[tuple]:
    if n <= 0:
        raise ValueError("El número de entregas debe ser positivo")
    azar = random.Random(semilla)
    ciudades = ("Santa Cruz", "La Paz", "Cochabamba")
    filas = []
    for i in range(1, n + 1):
        ciudad = ciudades[(i - 1) % len(ciudades)]
        ruta = f"{ciudad[:2].upper()}-{azar.randint(1, 5):02d}"
        distancia = round(azar.uniform(4, 80), 1)
        previsto = round(20 + distancia * 1.9)
        real = max(1, previsto + azar.randint(-18, 35))
        costo = round(12 + distancia * 1.4 + azar.uniform(0, 15), 2)
        entregada = int(azar.random() >= 0.08)
        fecha = (date(2026, 1, 1) + timedelta(days=azar.randint(0, 89))).isoformat()
        filas.append((i, fecha, ciudad, ruta, distancia, previsto, real, costo, entregada))
    return filas

def ejecutar(n: int, semilla: int, destino: Path) -> None:
    filas = crear_datos(n, semilla)
    destino.mkdir(parents=True, exist_ok=True)
    conexion = sqlite3.connect(":memory:")
    try:
        conexion.executescript(SCHEMA)
        conexion.executemany("INSERT INTO entregas VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", filas)
        conexion.commit()
        with (destino / "entregas_sinteticas.csv").open("w", newline="", encoding="utf-8") as archivo:
            escritor = csv.writer(archivo)
            escritor.writerow(("entrega_id", "fecha", "ciudad", "ruta", "distancia_km",
                              "minutos_planificados", "minutos_reales", "costo_bob", "entregada"))
            escritor.writerows(filas)
        cursor = conexion.execute(CONSULTA)
        columnas = [col[0] for col in cursor.description]
        resumen = cursor.fetchall()
        with (destino / "indicadores_por_ciudad.csv").open("w", newline="", encoding="utf-8") as archivo:
            escritor = csv.writer(archivo)
            escritor.writerow(columnas)
            escritor.writerows(resumen)
        for fila in resumen:
            print(dict(zip(columnas, fila)))
        print(f"Datos ficticios generados: {n}. Archivos en: {destino}")
    finally:
        conexion.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Indicadores logísticos con datos ficticios")
    parser.add_argument("--entregas", type=int, default=300)
    parser.add_argument("--semilla", type=int, default=42)
    parser.add_argument("--salida", type=Path, default=BASE / "salida")
    args = parser.parse_args()
    ejecutar(args.entregas, args.semilla, args.salida)
