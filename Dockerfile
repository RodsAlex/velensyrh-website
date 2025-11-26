# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm ci

# Copier tout le code source
COPY . .

# Build le projet Vite
RUN npm run build

# Stage 2: Servir avec nginx
FROM nginx:alpine

# Copier les fichiers buildés depuis le stage précédent
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 8080 (requis par Cloud Run)
EXPOSE 8080

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
