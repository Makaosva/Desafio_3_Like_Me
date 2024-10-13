const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mo76492250",
  database: "likeme",
  allowExitOnIdle: true,
});

const conectarDB = async () => {
  try {
    const res = await pool.query(`SELECT NOW()`);
    console.log("Conexion exitosa, fecha y hora actuales:", res.rows[0]);
  } catch (error) {
    console.error("Error al conectar a la Base de datos", error);
  }
};
//Llamar a la funcion de conectarDB
conectarDB();

const agregarPost = async (titulo, img, descripcion, likes) => {
  try {
    const consulta =
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(consulta, values);
    console.log("Post insertado correctamente!!", result.rowCount);
  } catch (error) {
    console.error("Error al insertar el post:", error);
  }
};

const getPosts = async () => {
  const result = await pool.query("SELECT * FROM posts");
  return result.rows;
};

module.exports = { getPosts, agregarPost };
