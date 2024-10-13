# Desafío - Like Me (Parte I)

---

## Descripción

La red social “Like Me” está apenas iniciando el proceso de desarrollo, se encuentra estudiando el mercado y analizando la competencia y ha descubierto que el éxito de esta industria se enfoca en los likes de los posts emitidos por los usuarios, por lo que decidió iniciar con el desarrollo de la lógica correspondiente a la creación de posts y a la interacción de likes que este puede tener.
En este desafío serás un desarrollador full stack developer de la empresa “Like Me” y deberás crear un servidor que disponibilice las rutas GET y POST para consultas y guardar los posts en una base de datos PostgreSQL con el paquete pg.
Para iniciar con el desarrollo de este desafío, ocupa las siguientes instrucciones SQL para crear una base de datos likeme y una tabla posts.
1. CREATE DATABASE likeme;
2. CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(255), likes INT);

Para el Post usar el siguiente formato de ejemplo en el body:

>{
    "titulo": "Superman",
   "img": "https://media.revistagq.com/photos/635a2ea4c39eb51840f8afe9/3:2/w_1620,h_1080,c_limit/henry-cavill-superman-futuro-peliculas.jpeg",
   "descripcion": "Sigue tu propia #like #faf"
}

---

### Requerimientos

1. Habilitar los cors en el servidor utilizando el paquete de npm.

2. Usar el paquete pg para conectarse e interactuar con la base de datos.

3. Crear una ruta GET con Express para devolver los registros de una tabla alojada en PostgreSQL.

4. Crear una ruta POST con Express que reciba y almacene en PostgreSQL un nuevo registro.

---

⌨️Escrito con ❤️ y [Macarena Osses](https://github.com/Makaosva)