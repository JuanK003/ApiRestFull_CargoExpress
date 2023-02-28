/*
Created: 24/02/2023
Modified: 24/02/2023
Model: MySQL 5.7
Database: MySQL 5.7
*/


-- Create tables section -------------------------------------------------

-- Table Departamentos

CREATE TABLE `Departamentos`
(
  `IdDepartamentos` Int NOT NULL AUTO_INCREMENT,
  `departamento` Varchar(150) NOT NULL,
  PRIMARY KEY (`IdDepartamentos`)
)
;

-- Table Municipio

CREATE TABLE `Municipio`
(
  `IdMunicipio` Int NOT NULL AUTO_INCREMENT,
  `municipio` Varchar(150) NOT NULL,
  `IdDepartamentos` Int,
  PRIMARY KEY (`IdMunicipio`)
)
;

CREATE INDEX `IX_Relationship1` ON `Municipio` (`IdDepartamentos`)
;

-- Table Usuarios

CREATE TABLE `Usuarios`
(
  `IdUsuario` Int NOT NULL AUTO_INCREMENT,
  `Nombres` Varchar(200) NOT NULL,
  `Apellidos` Varchar(200) NOT NULL,
  `Telefono` Varchar(25) NOT NULL,
  `Direccion` Varchar(250) NOT NULL,
  `email` Varchar(100) NOT NULL,
  `IdRol` Int,
  `CUI` Varchar(16) NOT NULL,
  `IdSucursales` Int,
  PRIMARY KEY (`IdUsuario`)
)
;

CREATE INDEX `IX_Relationship2` ON `Usuarios` (`IdRol`)
;

CREATE INDEX `IX_Relationship5` ON `Usuarios` (`IdSucursales`)
;

-- Table Rol

CREATE TABLE `Rol`
(
  `IdRol` Int NOT NULL AUTO_INCREMENT,
  `Cargo` Varchar(100) NOT NULL,
  PRIMARY KEY (`IdRol`)
)
;

-- Table Sucursales

CREATE TABLE `Sucursales`
(
  `IdSucursales` Int NOT NULL AUTO_INCREMENT,
  `Direccion` Varchar(250) NOT NULL,
  `IdMunicipio` Int,
  PRIMARY KEY (`IdSucursales`)
)
;

CREATE INDEX `IX_Relationship4` ON `Sucursales` (`IdMunicipio`)
;

-- Create foreign keys (relationships) section ------------------------------------------------- 


ALTER TABLE `Municipio` ADD CONSTRAINT `Relationship1` FOREIGN KEY (`IdDepartamentos`) REFERENCES `Departamentos` (`IdDepartamentos`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Usuarios` ADD CONSTRAINT `Relationship2` FOREIGN KEY (`IdRol`) REFERENCES `Rol` (`IdRol`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Sucursales` ADD CONSTRAINT `Relationship4` FOREIGN KEY (`IdMunicipio`) REFERENCES `Municipio` (`IdMunicipio`) ON DELETE RESTRICT ON UPDATE RESTRICT
;


ALTER TABLE `Usuarios` ADD CONSTRAINT `Relationship5` FOREIGN KEY (`IdSucursales`) REFERENCES `Sucursales` (`IdSucursales`) ON DELETE RESTRICT ON UPDATE RESTRICT
;