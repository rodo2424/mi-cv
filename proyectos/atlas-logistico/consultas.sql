-- Consultas de referencia para una tabla 'entregas' con el esquema de atlas.py.
-- Las filas representan datos ficticios, no operaciones reales.

-- 1. Cumplimiento y puntualidad por ciudad.
SELECT ciudad,
       COUNT(*) AS pedidos,
       SUM(entregada) AS entregados,
       ROUND(100.0 * SUM(entregada) / COUNT(*), 1) AS cumplimiento_pct,
       ROUND(100.0 * SUM(CASE WHEN entregada = 1
                                  AND minutos_reales <= minutos_planificados
                             THEN 1 ELSE 0 END)
             / NULLIF(SUM(entregada), 0), 1) AS puntualidad_pct
FROM entregas
GROUP BY ciudad
ORDER BY ciudad;

-- 2. Costo promedio y distancia por ruta.
SELECT ciudad, ruta, COUNT(*) AS pedidos,
       ROUND(AVG(distancia_km), 1) AS distancia_promedio_km,
       ROUND(AVG(costo_bob), 2) AS costo_promedio_bob
FROM entregas
GROUP BY ciudad, ruta
ORDER BY ciudad, costo_promedio_bob DESC;

-- 3. Entregas no completadas por ciudad.
SELECT ciudad, COUNT(*) AS entregas_no_completadas
FROM entregas
WHERE entregada = 0
GROUP BY ciudad
ORDER BY entregas_no_completadas DESC;
