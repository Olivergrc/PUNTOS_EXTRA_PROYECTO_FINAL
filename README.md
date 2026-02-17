# Cotizador de Seguros (proyecto.js)

## ¿Qué hace el programa?
Este programa realiza cotizaciones de seguros tomando datos del usuario (edad, estado civil, edad del cónyuge, cantidad de hijos, número de propiedades y salario).  
El programa permite hacer varias cotizaciones seguidas hasta que el usuario escriba **"Salir"**.

## ¿Cómo funciona?
1. El usuario decide si quiere cotizar o salir.
2. Se piden los datos:
   - Nombre
   - Edad
   - Si está casado y edad del cónyuge (si aplica)
   - Si tiene hijos y cuántos (si aplica)
   - Cantidad de propiedades
   - Salario mensual
3. Se calculan recargos:
   - Por edad del asegurado
   - Por edad del cónyuge (si está casado)
   - Por cantidad de hijos
   - Extra: 35% de la cotización por cada propiedad
   - Extra: 5% sobre el salario
4. Se suma el recargo total al precio base y se muestra el resultado.

## Partes importantes a considerar
- Validar que edad, salario, hijos y propiedades sean números.
- Si el usuario escribe "Salir", el programa termina.
- El recargo de propiedades se calcula con base en el precio base por cada propiedad.
- El recargo del salario es el 5% del salario ingresado.

## ¿Qué se podría mejorar?
- Pasar el código a funciones para que sea más ordenado.
- Manejar mejor cuando el usuario cancela una ventana (null).
- Mostrar un desglose detallado de cada recargo por separado.
- Permitir cambiar el precio base desde el inicio.
