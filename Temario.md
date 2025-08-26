# El lenguaje JavaScript


## Una introducción

* Una introducción a JavaScript
* Manuales y especificaciones
* Editores de Código
* Consola de desarrollador

 ## Fundamentos de JavaScript

* <del>¡Hola, mundo!<del>

* Estructura del código
* El modo moderno, "use strict"
* Variables
* Tipos de datos
* Interacción: alert, prompt, confirm
* Conversiones de Tipos
* Operadores básicos, matemáticas
* Comparaciones
* Ejecución condicional: if, '?'
* Operadores Lógicos
* Operador Nullish Coalescing '??'
* Bucles: while y for
* La sentencia "switch"
* Funciones
* Expresiones de función
* Funciones Flecha, lo básico
* Especiales JavaScript

## Calidad del código
* Debugging en el navegador
* Estilo de codificación
* Comentarios
* Código ninja
* Automatización de pruebas con Mocha
* Polyfills y transpiladores

## Objetos: lo básico
* Objetos
* Referencias de objetos y copia
* Recolección de basura
* Métodos de objeto, "this"
* Constructor, operador "new"
* Encadenamiento opcional '?.'
* Tipo Symbol
* Conversión de objeto a valor primitivo

## Tipos de datos
* Métodos en tipos primitivos
* Números
* Strings
* Arrays
* Métodos de arrays
* Iterables
* Map y Set
* WeakMap y WeakSet
* Object.keys, values, entries
* Asignación desestructurante
* Fecha y Hora
* Métodos JSON, toJSON

## Trabajo avanzado con funciones
* Recursión y pila
* Parámetros Rest y operador Spread
* Ámbito de Variable y el concepto "closure"
* La vieja "var"
* Objeto Global
* Función como objeto, NFE
* La sintaxis "new Function"
* Planificación: setTimeout y setInterval
* Decoradores y redirecciones, call/apply
* Función bind: vinculación de funciones
* Funciones de flecha revisadas

## Configuración de las propiedades de objetos
* Indicadores y descriptores de propiedad
* "Getters" y "setters" de propiedad

## Prototipos y herencia
* Herencia prototípica
* F.prototype
* Prototipos nativos
* Métodos prototipo, objetos sin __proto__

## Clases
* Sintaxis básica de `class`
* Herencia de clase
* Propiedades y métodos estáticos.
* Propiedades y métodos privados y protegidos.
* Ampliación de clases integradas
* Comprobación de clase: "instanceof"
* Los Mixins

## Manejo de errores
* Manejo de errores, "try...catch"
* Errores personalizados, extendiendo Error

## Promesas y async/await
* Introducción: callbacks
* Promesa
* Encadenamiento de promesas
* Manejo de errores con promesas
* Promise API
* Promisificación
* Microtareas (Microtasks)
* Async/await

## Generadores e iteración avanzada
* Generadores
* Iteradores y generadores asíncronos

## Módulos
* Módulos, introducción
* Export e Import
* Importaciones dinámicas

## Temas diversos
* Proxy y Reflect
* Eval: ejecutando una cadena de código
* Currificación
* Tipo de Referencia
* BigInt
* Unicode, String internals
* WeakRef y FinalizationRegistry

## El navegador: Documentos, Eventos e Interfaces
Aprenderemos a manejar la página del navegador: agregar elementos, manipular su tamaño y posición, crear interfaces dinámicamente e interactuar con el visitante.

### Documento
* Entorno del navegador, especificaciones
* Árbol del Modelo de Objetos del Documento (DOM)
* Recorriendo el DOM
* Buscar: getElement*, querySelector*
* Propiedades del nodo: tipo, etiqueta y contenido
* Atributos y propiedades
* Modificando el documento
* Estilos y clases
* Tamaño de elementos y desplazamiento
* Tamaño de ventana y desplazamiento
* Coordenadas

### Introducción a los eventos
* Introducción a los eventos en el navegador
* Propagación y captura
* Delegación de eventos
* Acciones predeterminadas del navegador
* Envío de eventos personalizados

### Eventos en la UI
* Eventos del Mouse
* Moviendo el mouse: mouseover/out, mouseenter/leave
* Arrastrar y Soltar con eventos del ratón
* Eventos de puntero
* Teclado: keydown y keyup
* Desplazamiento

### Formularios y controles
* Propiedades y Métodos de Formularios
* Enfocado: enfoque/desenfoque
* Eventos: change, input, cut, copy, paste
* Formularios: evento y método submit

### El documento y carga de recursos
* Página: DOMContentLoaded, load, beforeunload, unload
* Scripts: async, defer
* Carga de recursos: onload y onerror

### Temas diversos
