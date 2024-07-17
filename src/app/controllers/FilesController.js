import File from "../models/File";
import User from "../models/User";

class FilesController {
  async create(req, res) {
    const { originalname: name, filename: path } = req.file;
    const { userId } = req.params;

    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const file = await File.create({ name, path, user_id: userId });

      return res.status(201).json(file);
    } catch (err) {
      console.error("Erro ao criar arquivo:", err);
      return res.status(500).json({ error: "Erro interno ao criar arquivo" });
    }
  }
}

export default new FilesController();
