# =========================
# Etapa de build
# =========================
FROM node:20-alpine AS builder
WORKDIR /app

ENV NODE_ENV=development

# Copiamos archivos de configuración y dependencias
COPY package.json package-lock.json* tsconfig*.json ./

# Instalamos TODAS las dependencias para poder construir
RUN npm ci

# Copiamos el código fuente
COPY . .

# Compilamos la aplicación (genera carpeta dist)
RUN npm run build

# =========================
# Etapa de runtime
# =========================
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production

# Instalamos 'serve' para servir el contenido estático
# Es mucho más liviano que mantener todas las dependencias de node
RUN npm install -g serve

# Copiamos solo los archivos compilados del builder
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Iniciamos el servidor en el puerto 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
