# Evaluación Final de Code 301 - Servidor

Esta evaluación tiene 2 partes (aplicaciones), un **cliente** y un **servidor** que juntos, le permitirán al usuario crear una lista de elementos.

Cada aplicación está diseñada para ser operada y probada de forma independiente, mientras que también trabaja en conjunto.

- El servidor, escrito en express, será la API que la aplicación react utiliza para la recuperación y almacenamiento de datos.

## Tareas de funcionalidad

- Corrige los errores en el servidor.
- Corrige los errores en el cliente.
- Agrega la funcionalidad **DELETE** tanto en el servidor como en el cliente.
  - La aplicación del cliente tiene un "botón Delete" que está ahí pero no está conectado a nada. Conéctalo.
- Cambia el estilo de la lista de elementos.

### La API del servidor

Se ubica en tu repositorio de exámenes `back-end`, es un servidor de express diseñado para realizar operaciones CRUD (Create, Read, Update, Delete) en un modelo de datos mongo/mongoose: `items`.

#### Nota: este servidor no requiere que instales o configures MongoDB, eso se gestionará automáticamente.

> Sin embargo, este servidor produce errores de otras formas. Tu tarea es corregir los errores y agregar las funcionalidades que faltan.

¿Cómo sabrás que los has encontrado todos? ¡Aprobarán todas los tests!

#### Servidor: Ejecutando los tests

- Asegúrate de que el servidor **NO** se esté ejecutando.
- Desde el directorio raíz del servidor en el terminal, ejecute el comando `npm test`.
- Deberás ver una lista de los tests que se están aprobando y fallando, tal como has visto en tus desafíos de código.

#### Servidor: Comencemos

- Dirígente hasta tu repositorio `back-end` de tu examen final, tal y como te lo ha dado tu instructor.
- Hazle fork a este repositorio y clona el fork en tu equipo de desarrollo
- Instala tus dependencias.
- Ejecuta los tests.
  - con el servidor apagado, ejecuta el comando `npm test`.
- Un "error" es un fallo o una característica faltante. Encuentra los errores y corrígelos.
  - Sabrás que has encontrado los errores cuando se aprueben todas los tests.
- Despliégalo en la nube.

#### Servidor: Notas

- Puede inspeccionar los tests, pero no puedes cambiarlos.
- Una vez que esto funcione, mantenlo así. La aplicación de React lo usará para guardar y recuperar datos.

## Flujo de Git

- Se espera que sigas un flujo de git adecuado de la siguiente manera:
  - Acepta tus invitaciones a los repositorios base.
  - Hazles un fork a tu perfil de GitHub.
  - Clona la versión forked de los repositorios a tu equipo local.
  - Crea una rama y haz tu trabajo para pasar las tests.
  - ACP
  - Crea un Pull Request en tu repositorio forked desde tu rama de trabajo y haz merge con main cuando estés listo.
  - Despliega desde tu versión forked en GitHub.
  - Para obtener una calificación, crea un Pull Request desde la rama principal de tu repositorio forked hasta la rama principal del repositorio base.

## Envía tu tarea

- Cuando estés listo para enviarlo, realiza un Pull Request desde tu repositorio forked al repositorio base.
  - ¡NO hagas merge!
- Envía las URLs a:
  - Los repositorios base de GitHub desde los que hiciste fork al código de frontend y backend.
  - Las URLs de las aplicaciones frontend y backend desplegadas.

## Guía de Calificación

- 100 puntos en total.
- Se requieren 80 para aprobar.

### Back End - 35 puntos

- 05 puntos: aprueba los test del servidor que no sean de delete.
- 25 puntos: aprueba el test de delete.
- 05 puntos: despliegue en la nube.

### Front End - 35 puntos

- 05 puntos: aprueba los test del que no sean de delete.
- 25 puntos: aprueba el test de delete.
- 05 puntos: despliegue en Netlify.

### Integración - 5 Puntos

- 05 puntos: las aplicaciones desplegadas están correctamente configuradas para interoperar por completo.

### Estilo - 25 Puntos

- 15 puntos: uso funcional del componente Accordion.
- 10 puntos: eliminación de todos los elementos relacionados con las tablas.

## LOGROS ADICIONALES

Sin puntos extra, solo la satisfacción de haberlo expandido.

- Integrar Mongo Atlas para que el servidor y el cliente desplegados sean completamente funcionales.
