import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

// ✅ Włącz CORS dla wszystkich domen
server.use(cors());

// 🛠️ Standardowe middleware (np. logger, static)
server.use(middlewares);

// ✅ Twoja główna "baza danych"
server.use("/cities", router);

// 🌍 Ustaw port dynamicznie (Render daje go przez process.env.PORT)
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
