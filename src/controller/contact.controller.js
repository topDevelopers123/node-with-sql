const { sequelize } = require("../DB/DbConnect");
const { contactModel } = require("../model/contact.model");
const { User4Model } = require("../model/user4.model");

const unmanagedContactTransaction = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const newUser = await User4Model.create(
      { name: "gyan" },
      { transaction: t }
    );
    const contact = await contactModel.create(
      { phone: "789456123", userId: newUser.id },
      { transaction: t }
    );
    await t.commit();
    return res.status(200).json({ newUser, contact });
  } catch (error) {
    console.log(error);
    await t.rollback();
  }
};

const managedTransaction = async (req, res) => {
  try {
    let newUser;
    let contact;
    await sequelize.transaction(async (transaction) => {
      newUser = await User4Model.create(
        { name: "vishu" },
        { transaction: transaction }
      );
      contact = await contactModel.create(
        { phone: "15464518", userId: newUser.id },
        { transaction: transaction }
      );
    });

    return res.json({ newUser, contact });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { unmanagedContactTransaction, managedTransaction };
