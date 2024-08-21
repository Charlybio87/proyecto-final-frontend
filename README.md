# Proyecto Final Frontend: Slack Clone

## Descripción

En este proyecto, desarrollé una aplicación de chat inspirada en Slack, implementando características similares a las de la aplicación original. 
Decidí encarar el proyecto desde el lado de un "cambio de identidad visual" y me ayude de Behance y Figma para buscar un nuevo logo y una paleta de colores.

##Tecnologías y Librerías Utilizadas

- **React**
- **React Router DOM**
- **Google Fonts**
- **Bootstrap Icons**

##Funcionalidades

- **Almacenamiento de datos en LocalStorage:** Implementé la persistencia de datos utilizando localStorage desde el incio del proyecto. Esto me permitió gestionar toda la lógica de almacenamiento y recuperación de datos desde el principio, asegurando que los entornos de trabajo, canales y mensajes se mantuvieran entre sesiones.

- **Creación de nuevos espacios de trabajo y canales:** Los usuarios pueden crear nuevos espacios de trabajo y canales. Los formularios cuentan con validaciones que aseguran que los nombres no sean vacíos y que cumplan con un mínimo de caracteres.

- **Barra de búsqueda que filtra por contenido y autor del mensaje**

- **Navegación a través de los entornos y canales**

- **Envío de nuevos mensajes con auto-scroll hacia abajo:** Implementé un auto-scroll hacia abajo al enviar nuevos mensajes utilizando `UseRef`.

##Desafíos y Soluciones

- **Uso de useContext:** Para mantener la consistencia y facilitar la comunicación entre componentes. Esto permitió manejar los datos de manera eficiente, obteniendo la información directamente desde localStorage utilizando el archivo `storageHelpers`.

- **Validación de Formularios:** Desarrolle en el archivo `validationHelpers` funciones de validación generales para reutilizar en ambos formularios de creación de nuevos espacios de trabajo y canales.

- **Diseño Responsivo con Menú Desplegable:** Implemente un diseño resposivo de 320 a 2000px, enfrentando desafíos como la implementación de un menú desplegable para pantallas mas pequeñas. Este menú se oculta automáticamente cuando selecciona un canal.

##Diseño 

Para el diseño, me inspiré en el concepto de identidad visual de Slack que encontré en Behance.

- **Paleta de colores y tonalidades:** Para definir la misma me ayude de Coolors y Figma.

| ![Paleta de Colores](public/assets/images/paleta-colores.png) |
|:--:|
| _Paleta de Colores_ |

- **Logo:** El logo fue adaptado del concepto visual encontrado en [Behance](https://www.behance.net/gallery/75131405/Slack-Visual-Identity-Concept)