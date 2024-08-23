const { Op } = require("sequelize");
const { sequelize } = require("../DB/DbConnect");
const { User1Model } = require("../model/user1.model");

const create = async (req, res) => {
    try {
        const data = req.body

        //build method
        // const user = User1Model.build({...data})
        // await user.save()
        // console.log(user.toJSON());

        //create method
        // const user = await User1Model.create({ ...data })
        // console.log(user.toJSON());

        //create method
        // const user = await User1Model.create({ ...data })
        // // user.name = "vishu
        // user.set({
        //     name: "vishu",
        //     favoriteColor: "abc"
        // })
        // await user.save()
        // console.log(user.toJSON());

        //update
        // const user = await User1Model.create({ ...data })
        // await user.update({ name: "abc", favoriteColor: "black" })
        // await user.save()

        // //delete 
        // await user.destroy()
        // await user.reload()     //gives updated value from database

        //save only some fields
        // const user = await User1Model.create({ ...data })
        // user.name = "updated name"
        // user.age = 23;
        // user.favoriteColor = "yellow"
        // await user.save({ fields: ["age", "name"] })


        //save only some fields
        // const user = await User1Model.create({ name: data?.name, favoriteColor: data?.favoriteColor, age: data?.age, cash: data?.cash }, { fields: ["name", "age"] })


        //increment or decrement 
        // const user = await User1Model.create({ ...data })
        // await user.increment("age")      //like this by default it will increment by 1
        // await user.increment("age", { by: 5 })
        // await user.increment({ age: 7, cash: 100 })
        // await user.increment(["age", "cash"], { by: 10 })    //increment both the fields by 10



        //bulkData
        const newUser = {
            name: "new name",
            favoriteColor: "red",
            cash: 2000,
            age: 20
        }
        const bulkData = [
            {
                name: "new name",
                favoriteColor: "red",
                cash: 2000,
                age: 20
            },
            {
                name: "new name1 ",
                favoriteColor: "orange",
                cash: 1000,
                age: 21
            },
            {
                name: "new name3",
                favoriteColor: "lime",
                cash: 3000,
                age: 22
            }
        ]
        // const user = await User1Model.create(newUser)
        // const BulkUser = await User1Model.bulkCreate(bulkData)

        const allUsers = await User1Model.findAll()


        //specific attribute only (select name and favoriteColor from ....)
        // const specificData = await User1Model.findAll({ attributes: ["name", "favoriteColor"] })
        // console.log("specificData", specificData);

        //Attribute can be rename (select favoriteColor as fv from ...)
        // const data2 = await User1Model.findAll({ attributes: ["name", ["favoriteColor", "fv"]] })  //favoriteColor as fv
        // console.log("data2", data2);

        //aggregation using sequlize function (select count(name) as count)
        // const nameCount = await User1Model.findAll({ attributes: ["name", [sequelize.fn("COUNT", sequelize.col("name")), "count"]], group: ['name'] })
        // console.log("nameCount", nameCount);

        const exludingAge = await User1Model.findAll({ attributes: { exclude: ["age"] } })
        console.log(exludingAge);







    } catch (error) {
        console.log(error)
    }
}


//start from where clause
const create2 = async (req, res) => {
    //filter query
    // const data = await User1Model.findAll({
    //     where: {
    //         // name: "vishu",
    //         name: ["vishal", "vishu"],
    //         age: 11
    //     }
    // })
    // res.json(data)

    //using sequlize operator
    // const data = User1Model.findAll({
    //     where: {
    //         id: {
    //             // [Op.eq]: 2    // op is operator where id equal to 2
    //             // [Op.in]: [1, 2, 3]  
    //         },
    //         [Op.and]: [{ id: 2, name: "vishal" }]   // upar id already match kr rhe h toh yeh uske andar nhi jayega
    //     }
    // })


    //update user sequlize operator
    // const updatedUser = await User1Model.update({
    //     favoriteColor: "silver", age: 12
    // }, {
    //     where: {
    //         id: 3
    //     }
    // })
    // updatedUser  will give 0 or 1
    // res.json(updatedUser)

    // const deleteData = await User1Model.destroy({
    //     where:{
    //         id:3
    //     }
    // })
    // res.json(deleteData)

    //
    // const user = await User1Model.findByPk(1)
    // const user1 = await User1Model.findOne({
    //     where: {
    //         id: 2
    //     }
    // })

    // res.json({ user, user1 })

    //finders in sequlize
    // const [data, created] = await User1Model.findOrCreate({
    //     where: {
    //         name: "gyan"
    //     }, defaults: {
    //         name: "gyan",
    //         age: 25
    //     }
    // })
    // res.json({ data, created })

    const {count, rows} = await User1Model.findAndCountAll({
        where: {
            name: {
                [Op.like]: "v%",
            }
        },
        offset: 1,
        limit: 2
    })
    res.json({ count, rows })
}


module.exports = { create, create2 }