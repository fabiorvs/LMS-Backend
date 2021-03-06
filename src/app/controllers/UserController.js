import User from "../models/User";

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
    });
  }
}

export default new UserController();
