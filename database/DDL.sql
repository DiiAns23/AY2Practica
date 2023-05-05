DROP DATABASE IF EXISTS practica;
CREATE DATABASE practica;
USE practica;
-- Tabla con datos de: nombre, anio, clasificacion, genero y descripcion
CREATE TABLE pelicula (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    anio INT NOT NULL,
    clasificacion VARCHAR(10) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    descripcion VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)
);

-- Procedure para ingresar datos a la tabla pelicula
DELIMITER $$
CREATE PROCEDURE insertarPelicula(
    IN nombre VARCHAR(100),
    IN anio INT,
    IN clasificacion VARCHAR(10),
    IN genero VARCHAR(100),
    IN descripcion VARCHAR(1000)
)
BEGIN
    -- declarar variable
    DECLARE id INT;
    -- insertar datos y obtener el id
    INSERT INTO pelicula (nombre, anio, clasificacion, genero, descripcion) VALUES (nombre, anio, clasificacion, genero, descripcion);
    SET id = LAST_INSERT_ID();
END$$

-- Procedure para obtener datos de la tabla pelicula
DELIMITER $$
CREATE PROCEDURE obtenerPelicula()
BEGIN
    -- obtener datos
    SELECT * FROM pelicula;
END$$

-- Procedure para actualizar datos de la tabla pelicula por id
DELIMITER $$
CREATE PROCEDURE actualizarPelicula(
    IN id INT,
    IN nombre VARCHAR(100),
    IN anio INT,
    IN clasificacion VARCHAR(10),
    IN genero VARCHAR(100),
    IN descripcion VARCHAR(1000)
)
BEGIN
    -- actualizar datos
    UPDATE pelicula pel SET pel.nombre = nombre, pel.anio = anio, pel.clasificacion = clasificacion, pel.genero = genero, pel.descripcion = descripcion WHERE pel.id = id;
END$$

-- Procedure para eliminar datos de la tabla pelicula por id
DELIMITER $$
CREATE PROCEDURE eliminarPelicula(
    IN id INT
)
BEGIN
    -- eliminar datos
    DELETE FROM pelicula pel WHERE pel.id = id;
END$$

SELECT COUNT(*) FROM pelicula;
