const { PostModel } = require("../model/post.model");
const { profileModel } = require("../model/profile.model");
const { User3Model } = require("../model/user3.model");

const create4 = async (req, res) => {
  try {
    const data = req.body;
    const user = await User3Model.create(data);
    // const profile = await profileModel.create({
    //   Bio: "my Bio",
    //   userId: user.id,
    // });
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

const createProfile = async (req, res) => {
  try {
    const data = req.body;
    const user = await User3Model.findByPk(data?.id);
    const profile = await profileModel.create({
      Bio: data?.Bio,
      userId: user?.id,
    });
    return res.status(200).json({ profile });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const userWithProfile = await User3Model.findAll({
      include: { model: profileModel, as: "profile" },
    });
    return res.status(200).json({ userWithProfile });
  } catch (error) {
    console.log(error);
  }
};

const getUserPost = async (req, res) => {
  try {
    const userData = await User3Model.findByPk(req.body.id, {
      include: {
        model: PostModel,
        as: "postData",
      },
    });
    return res.status(200).json(userData);
  } catch (error) {
    console.log(error);
  }
};

const getUserPostWithLoading = async (req, res) => {
  try {
    //eagar loading
    // const userData = await User3Model.findByPk(req.body.id, {
    //   include: {
    //     model: PostModel,
    //     as: "postData",
    //   },
    // });
    // return res.status(200).json(userData);

    //lazy loading
    const user = await User3Model.findByPk(1);
    const post = await user.getPostData(); // this function auto generate from assocication from hasmany has a field named "postData"
    return res.status(200).json({ post });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    // await User3Model.destroy({     //soft delete
    //   where: {
    //     id: 1,
    //   },
    // });

    //hard delete
    await User3Model.destroy({
      where: {
        id: 1,
      },
      force: true,
    });
  } catch (error) {
    console.log(error);
  }

  //just example
  // Example showing the static `restore` method.
  // Restoring every soft-deleted post with more than 100 likes
  await Post.restore({
    where: {
      likes: {
        [Op.gt]: 100,
      },
    },
  });
};

module.exports = {
  create4,
  getUser,
  createProfile,
  getUserPost,
  deleteUser,
  getUserPostWithLoading,
};
