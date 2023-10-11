# Etapa 1: Compilar la aplicación Angular
FROM node:18 as build

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia los archivos de configuración y el código fuente
COPY package*.json ./
COPY angular.json ./
COPY tsconfig.json ./
COPY src ./src

# Instala las dependencias
RUN npm install
COPY . /app

# Construye la aplicación Angular
RUN npm run build --prod

FROM nginx

COPY --from=build /app/dist/gym-front usr/share/nginx/html