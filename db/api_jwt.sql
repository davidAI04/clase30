USE api_jwt
GO

CREATE TABLE usuarios (
    id_usr int NOT NULL IDENTITY (1,1),
    nombres char (6) NOT NULL,
    apellidos char (6) NOT NULL,
    email char (6) NOT NULL,
    usuario char (6) NOT NULL,
    contrasena char (6) NOT NULL,
    PRIMARY KEY (id_usr)
)
GO

INSERT INTO usuarios (
  nombres,
  apellidos,
  email,
  usuario, 
  contrasena 
) VALUES (
  'proof1',
  'proof1',
  'proof1',
  'proof1',
  'proof1'
)