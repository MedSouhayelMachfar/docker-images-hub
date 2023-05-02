FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 

COPY . .

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]