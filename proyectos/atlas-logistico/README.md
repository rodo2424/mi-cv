# Atlas Logístico · Camino al Olimpo

**Estado: prototipo educativo en rama de revisión.** Proyecto creado para practicar Python, SQL y análisis de indicadores de distribución. **Todos los datos son sintéticos** y no corresponden a Embol, MAYBO ni a ninguna operación real.

## Pregunta de negocio

¿Cómo comparar el cumplimiento, la puntualidad y el costo promedio de entregas entre ciudades y rutas, evitando confundir pedidos no completados con entregas tardías?

## Qué incluye

- `atlas.py`: genera entregas ficticias con semilla reproducible, las analiza en SQLite y exporta dos CSV.
- `consultas.sql`: tres consultas SQL documentadas para explorar ciudades y rutas.
- `test_atlas.py`: pruebas de reproducibilidad, integridad básica y generación de archivos.
- `salida/`: carpeta generada localmente; no contiene datos empresariales.

## Cómo ejecutarlo

Requiere **Python 3.10+**; no necesita paquetes externos.

Desde esta carpeta:

```sh
python atlas.py --entregas 300 --semilla 42
python -m unittest discover -p "test_*.py"
```

El script genera `salida/entregas_sinteticas.csv` y `salida/indicadores_por_ciudad.csv`. Los importes se expresan en **BOB ficticios**; no deben interpretarse como tarifas de mercado.

## Definiciones

- **Cumplimiento (%):** entregas completadas / pedidos totales.
- **Puntualidad (%):** entregas completadas dentro del tiempo planificado / entregas completadas.
- **Costo promedio (BOB):** promedio del costo sintético por pedido, incluidos los no completados.

Estas definiciones son supuestos del ejercicio, no métricas oficiales de ninguna empresa. El generador no simula geografía real, tráfico, demanda, asignación de vehículos ni causalidad de costos.

## Próximos pasos propuestos

1. Ejecutar y validar el prototipo en un entorno Python.
2. Incorporar análisis por semana, gráficos y un pequeño diccionario de datos.
3. Revisar el proyecto contigo antes de presentarlo como parte del portafolio profesional.
4. Mantener el CV publicado sin cambios hasta que se autorice expresamente.

**Nota:** crear archivos en GitHub no equivale a demostrar que el código se ejecutó correctamente; los resultados deben comprobarse.
