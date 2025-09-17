# 1. Build stage
FROM node:20-alpine AS build
WORKDIR /app

# copy package.json + package-lock.json
COPY package*.json ./

# ติดตั้ง dependencies ทั้งหมด (รวม devDependencies)
RUN npm install

# copy โค้ดทั้งหมด
COPY . .

# ติดตั้ง vite CLI global
RUN npm install -g vite

# build project
RUN npm run build

# 2. Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
