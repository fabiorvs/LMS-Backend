import { Router } from "express";
import authMiddleware from "./app/middlewares/auth";
import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

const routes = new Router();

// Users
routes.post("/users", UserController.store);

// Sessions
routes.post("/sessions", SessionController.store);

// Todas rotas abaixo desse middleware precisa estar autenticado
routes.use(authMiddleware);

routes.get("/teste", (req, res) => {
  return res.json({ ok: true });
});
export default routes;
