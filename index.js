const server = require("./server");
//use environment variables or 8000 port
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});

module.exports = server;
