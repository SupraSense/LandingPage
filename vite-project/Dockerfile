# =========================
# Etapa de build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos archivos de dependencias
COPY package.json package-lock.json* ./

# Instalamos dependencias (usando npm ci para entornos limpios)
RUN npm ci

# Copiamos el resto del código
COPY . .

# Construimos la aplicación (genera la carpeta dist)
RUN npm run build

# =========================
# Etapa de runtime
# =========================
FROM node:20-alpine AS runtime

WORKDIR /app

# Instalamos 'serve' globalmente para servir archivos estáticos
RUN npm install -g serve

# Copiamos solo la carpeta 'dist' generada en la etapa anterior
COPY --from=builder /app/dist ./dist

# Exponemos el puerto 3000
EXPOSE 3000

# Ejecutamos serve escuchando en el puerto 3000
# -s: Single Page Application (para que las rutas funcionen al recargar)
# -l: Puerto
# --no-clipboard: Evita errores al intentar copiar al portapapeles en servidor
CMD ["serve", "-s", "dist", "-l", "3000", "--no-clipboard"]
