const { profileModel } = require("../model/profile.model");
const { User3Model } = require("../model/user3.model");

const create4 = async (req, res) => {
  try {
    const user = await User3Model.create({ username: "vishal" });
    const profile = await profileModel.create({
      Bio: "my Bio",
      userId: user.id,
    });
    return res.status(200).json({ user, profile });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
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
