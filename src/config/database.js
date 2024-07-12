module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "secret",
  database: "Projeto NodeJS",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};
