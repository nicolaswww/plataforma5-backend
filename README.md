# Plataforma5 Backend
Sistema para gestión de equipajes en un aeropuerto.

## Requeriments:
Node 14.x  
Postgres

## Run project:
1. Clone and run the frontend (https://github.com/nicolaswww/plataforma5-frontend)
2. In this repo: ```cp .env.example .env``` and configure vars
3. ```npm install && npm run prepare-database && npm run start```
4. Enjoy :)


## Unnecessary but useful

### Manually database creation  
Run `npx sequelize db:create;` for create database.  
Run `npx sequelize db:migrate;` for migrate tables.  
Run `npx sequelize db:seed:all;` for create seeds.  
