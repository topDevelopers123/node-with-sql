const { PostModel } = require("./model/post.model");
const { profileModel } = require("./model/profile.model");
const { User3Model } = require("./model/user3.model");

//one to one mapping
User3Model.hasOne(profileModel, {
  foreignKey: "userId",
  as: "profile",
});

profileModel.belongsTo(User3Model, {
  foreignKey: "userId",
  as: "userinfo",
});

// one to many | A user can have many post

User3Model.hasMany(PostModel, {
  foreignKey: "userId",
  as: "postData",
});

PostModel.belongsTo(User3Model, {
  foreignKey: "userId",
  as: "user",
});
