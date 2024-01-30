const { categoryService } = require('../services');
const { mapStatusHTTP } = require('../utils/mapHTTP');

const createCategory = async (req, res) => {
  try {
    const category = req.body;
    const { status, data } = await categoryService.create(category);

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error });
  }
};

module.exports = {
  createCategory,
};