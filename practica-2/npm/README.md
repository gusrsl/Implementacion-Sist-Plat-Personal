Práctica de Docker con Node.js y NPM
En esta práctica, aplicaremos los conceptos aprendidos sobre Docker para trabajar con Node.js y NPM. Los objetivos principales son:

Utilizar Docker para crear contenedores aislados para nuestras aplicaciones Node.js.
Ejecutar comandos de NPM dentro de un contenedor Docker.
Comprender cómo utilizar Docker Compose para simplificar tareas recurrentes.
Ejemplo Codificado en la Carpeta NPM
1. Crear una imagen Docker para NPM
Para comenzar, vamos a crear una imagen Docker para NPM utilizando el archivo Dockerfile proporcionado en la carpeta 02. Puede construir la imagen y ejecutar un contenedor aislado para probar los comandos de NPM utilizando los siguientes comandos:

bash
Copy code
# Desde la carpeta del proyecto
docker build -t mynpm .

# Inicializar un proyecto NPM dentro del contenedor
docker run -it -v [carpeta local]:/app mynpm init

# Instalar el paquete 'express' utilizando NPM dentro del contenedor
docker run -it -v [carpeta local]:/app mynpm install express --save

# Instalar las dependencias del proyecto dentro del contenedor
docker run -it -v [carpeta local]:/app mynpm install
Reemplace [carpeta local] con la ruta de la carpeta de su proyecto en su sistema local.

2. Utilizar Docker Compose
Una alternativa conveniente es utilizar Docker Compose para gestionar y ejecutar contenedores Docker. En la carpeta 02, encontrará un archivo docker-compose.yml que define servicios para ejecutar comandos NPM. Puede utilizar los siguientes comandos:

bash
Copy code
# Inicializar un proyecto NPM dentro del contenedor utilizando Docker Compose
docker-compose run npm init

# Instalar el paquete 'express' utilizando Docker Compose
docker-compose run --rm npm install express --save

# Instalar las dependencias del proyecto utilizando Docker Compose
docker-compose run --rm npm install
Docker Compose simplifica la ejecución de contenedores y es especialmente útil cuando necesita realizar tareas recurrentes.

¡Ha completado con éxito la práctica de Docker con Node.js y NPM! Ahora está familiarizado con la creación de imágenes Docker, la ejecución de comandos de NPM en contenedores y la utilidad de Docker Compose para tareas de desarrollo.

Se realizaron las debidas practicas correspondientes al apartado de le dockerizacion de ejemplo con funciones de npm como se adjunta en las capturas:

![Esta es una imagen de ejemplo](./../screenshots/Captura%20de%20docker%20en%20NPM%2018.png)

![Captura de Pantalla de Mi Proyecto](/screenshots/DOCKER%20NPM%2019.png)