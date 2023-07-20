const { db, syncAndSeed } = require("./index");

const seed = async () => {
  await syncAndSeed();
  db.close();
};

seed();
