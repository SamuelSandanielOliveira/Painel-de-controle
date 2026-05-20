CREATE TABLE painel (
  id INT AUTO_INCREMENT PRIMARY KEY,
  autor VARCHAR(50) NOT NULL,
  mensagem TEXT NOT NULL,
  data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(20) NOT NULL,
  atual INT DEFAULT 0,
  maximo INT DEFAULT 100
);

INSERT INTO recursos (tipo, atual, maximo) VALUES
('comida', 50, 100),
('sucata', 30, 80),
('pessoas', 10, 20);
