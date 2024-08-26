const { sequelize } = require("../DB/DbConnect")
const { User2Model } = require("../model/user2.model")

const create3 = async (req, res) => {
    const { firstname, lastName, email, password, age, mobile, isActive } = req.body
    try {
        const [user, created] = await User2Model.findOrCreate({
            where: { email: email },
            defaults: {
                firstname, lastName, email, password, age, mobile, isActive
            }
        })
        if (created === false) {
            return res.status(200).json({ message: "User already exist" })
        }

        return res.status(200).json({ data: user.toJSON() })

    } catch (error) {
        return res.status(500).json({ message: error })
    }
}
const get = async (req, res) => {

    //agar raw query use kr rhe h toh getter setter aur virtual use nhi kr skte
    // const [results,metadata] = await sequelize.query("SELECT * from user2")
    // const results = await sequelize.query("SELECT * from user2", { type: sequelize.QueryTypes.SELECT })

    const projects = await sequelize.query('SELECT * FROM User2', {
        // as we cannot use getter setter or any virtual from raw query we need to use Raw query with models
        model: User2Model,
        plain: false,  // by default plain false hota h agar plain use true kr rhe h toh vo DB se first result dega sirf this can be usefull when we work with "WHERE" query for example get the first user whose age is >15 
        mapToModel: true, // pass true here if you have any mapped fields
    });
    return res.status(200).json({ projects })


}


module.exports = { create3, get }