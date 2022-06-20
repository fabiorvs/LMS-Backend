import jwt from "jsonwebtoken";
import User from "../models/User";
import authConfig from "../../config/auth";

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { login: req.body.login },
    });

    if (userExists) {
      return res.status(400).json({ error: "Usuario já existe." });
    }

    const { id, name, login, email } = await User.create(req.body);

    return res.json({
      user: {
        id,
        name,
        login,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new UserController();
