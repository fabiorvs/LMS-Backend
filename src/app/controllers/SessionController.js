import * as Yup from "yup";
import jwt from "jsonwebtoken";
import User from "../models/User";

import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      login: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação." });
    }

    const { login, password } = req.body;

    // Verificando se esse login existe
    const user = await User.findOne({
      where: { login, status: "Y" },
    });
    if (!user) {
      return res.status(401).json({ error: "Usuário ou senha incorreta." });
    }

    // Verificar se a senha confere.
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Usuário ou senha incorreta." });
    }

    const { id, name, email } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        login,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
