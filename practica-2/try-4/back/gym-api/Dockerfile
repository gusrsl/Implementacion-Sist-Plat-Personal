# Etapa: BASE
FROM node AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copiar los archivos fuente
COPY . .

# Etapa: TEST
FROM base AS test
# Aquí podrías ejecutar pruebas o cualquier otro comando relacionado con testing. 
# Como ejemplo, ejecuto las pruebas de Jest.
RUN npm run test

# Etapa: PRODUCTION
FROM base AS production
# Compilar el proyecto
RUN npm run build
# Exponer el puerto en el que corre tu aplicación
EXPOSE 3000
# Comando para correr tu aplicación
CMD ["npm", "start"]
