<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# TesloDb API

1. Clonar el proyecto
2. Instalar las dependencias

```
  yarn install
```

3. Clonar el archivo `env.template` y renombrarlo a `.env`

4. Cambiar las variables de entorno

5. Levantar la base de datos

```
  docker-compose up -d
```

6. Ejecutar el seed para llenar la base de datos con productos

```
  http://localhost:3000/api/seed
```

7. Levantar la aplicación en modo desarrollo

```
  yarn start:dev
```
