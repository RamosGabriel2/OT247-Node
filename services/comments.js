const { Comment } = require('../models');
const { ErrorObject } = require('../helpers/error');

const deleteCommentById = async (id) => {
  try {
    return await Comment.destroy({ where: { id } });
  } catch (err) {
    throw new ErrorObject(err.message, 400, err);
  }
};

module.exports = {
  deleteCommentById,
};
