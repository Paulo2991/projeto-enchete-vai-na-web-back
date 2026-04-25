class BaseController {
  constructor(service, createSchema = null) {
    this.service = service;
    this.createSchema = createSchema;
  }

  async list(req, res) {
    try {
      const items = await this.service.findAll();
      res.json(items);
    } catch (error) {
      res
        .status(500)
        .json({ erro: `Erro ao buscar ${this.service.tableName}` });
    }
  }

  async getById(req, res) {
    try {
      const item = await this.service.findById(req.params.id);
      if (!item) {
        return res.status(404).json({ erro: "Item não encontrado" });
      }
      res.json(item);
    } catch (error) {
      res
        .status(500)
        .json({ erro: `Erro ao buscar ${this.service.tableName} por ID` });
    }
  }

  async create(req, res) {
    try {
      let validatedBody = req.body;
      if (this.createSchema) {
        const { error, value } = this.createSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ erro: error.details[0].message });
        }
        validatedBody = value;
      }
      const item = await this.service.create(validatedBody);
      const entityName = this.service.tableName.slice(0, -1).toLowerCase();
      res.status(201).json({
        mensagem: `${entityName.charAt(0).toUpperCase() + entityName.slice(1)} criado com sucesso`,
        [entityName]: item,
      });
    } catch (error) {
      res
        .status(500)
        .json({ erro: `Erro ao criar ${this.service.tableName.slice(0, -1)}` });
    }
  }
}

module.exports = BaseController;
