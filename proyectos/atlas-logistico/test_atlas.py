"""Pruebas con la biblioteca estándar; ejecutar con python -m unittest discover."""
import tempfile
import unittest
from pathlib import Path
from atlas import crear_datos, ejecutar

class PruebasAtlas(unittest.TestCase):
    def test_semilla_reproducible(self):
        self.assertEqual(crear_datos(20, 42), crear_datos(20, 42))

    def test_cantidad_y_valores(self):
        filas = crear_datos(15, 42)
        self.assertEqual(len(filas), 15)
        self.assertTrue(all(fila[4] > 0 and fila[7] >= 0 and fila[8] in (0, 1) for fila in filas))

    def test_archivos(self):
        with tempfile.TemporaryDirectory() as carpeta:
            salida = Path(carpeta)
            ejecutar(12, 7, salida)
            self.assertTrue((salida / "entregas_sinteticas.csv").is_file())
            self.assertTrue((salida / "indicadores_por_ciudad.csv").is_file())

    def test_cantidad_invalida(self):
        with self.assertRaises(ValueError):
            crear_datos(0, 42)

if __name__ == "__main__":
    unittest.main()
