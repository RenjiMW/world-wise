const jsonServer = await import("json-server").then((m) => m.default);
const cors = await import("cors").then((m) => m.default);

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(middlewares);
server.use("/cities", router);

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server running on http://localhost:${PORT}`);
});
