const jsonServer = await import("json-server").then((m) => m.default);
const cors = await import("cors").then((m) => m.default);

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use("/cities", router);

/* global process */
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
