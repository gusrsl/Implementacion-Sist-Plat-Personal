Práctica de Docker con Laravel
En esta práctica, aprenderemos a utilizar Docker para trabajar con aplicaciones Laravel. Los objetivos principales son:

Crear un proyecto Laravel utilizando Docker Compose.
Configurar un servidor Laravel que escuche en el puerto 8000.
Realizar tareas de migración y ejecutar comandos Artisan dentro del contenedor Docker.
Utilizar NPM y sus comandos dentro del entorno Docker.
Probar el Ejemplo en la Carpeta Laravel
1. Crear un Proyecto Laravel
Para comenzar, vamos a utilizar Docker Compose para crear un nuevo proyecto Laravel. Puede hacerlo utilizando los siguientes comandos:

bash
Copy code
# Desde la carpeta del proyecto
docker-compose run --rm composer create-project --prefer-dist laravel/laravel .
Este comando creará un nuevo proyecto Laravel en la carpeta actual del proyecto.

2. Configurar el Servidor Laravel
A continuación, configuraremos un servidor Laravel que escuche en el puerto 8000. Utilizaremos Docker Compose para hacerlo:

bash
Copy code
# Levantar el servidor Laravel utilizando Docker Compose
docker-compose up -d --build server
Esto iniciará un servidor web que ejecuta su aplicación Laravel y estará disponible en http://localhost:8000 en su navegador.

3. Realizar Tareas de Migración
Antes de ejecutar comandos Artisan, asegúrese de actualizar las variables de entorno en el archivo .env en su proyecto Laravel. Las variables de entorno necesarias para la conexión a la base de datos deben configurarse como se muestra a continuación:

dotenv
Copy code
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
Luego, puede ejecutar tareas de migración dentro del contenedor Docker:

bash
Copy code
# Ejecutar migraciones utilizando Docker Compose
docker-compose run --rm artisan migrate
Este comando aplicará las migraciones de base de datos a su proyecto Laravel.

4. Utilizar Comandos Artisan y NPM
Dentro del entorno Docker, puede utilizar Artisan para realizar diversas tareas, como listar los comandos disponibles:

bash
Copy code
# Listar comandos Artisan disponibles
docker-compose run --rm artisan list
Además, puede utilizar NPM y sus comandos dentro del entorno Docker:

bash
Copy code
# Ejemplo de uso de NPM dentro de Docker Compose
docker-compose run --rm npm version
De esta manera, puede ejecutar y administrar comandos de Laravel y NPM en un entorno Docker.

¡Ha completado con éxito la práctica de Docker con Laravel! Ahora está familiarizado con la creación de proyectos Laravel, la configuración de servidores, la ejecución de tareas de migración y el uso de comandos Artisan y NPM dentro de Docker.

![Captura de Pantalla de Mi Proyecto](/screenshots/caplaravel.png)