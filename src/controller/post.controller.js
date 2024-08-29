const { PostModel } = require("../model/post.model");
const { User3Model } = require("../model/user3.model");

const createPost = async (req, res) => {
  try {
    const data = req.body;
    const post = await PostModel.create(data);
    return res.status(200).json({ post });
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  const data = req.body;
  const post = await PostModel.findAll({
    where: {
      userId: data?.id,
    },
  });
  return res.status(200).json({ post });
};

module.exports = { createPost ,getPost};
