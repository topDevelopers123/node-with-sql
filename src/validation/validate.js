const { validate } = require("joi")
const { userValidationSchema } = require("./UserValidation")

function validateData(userValidationSchema) {
    return (req, res, next) => {
        try {
            const data = req.body

            const { error } = userValidationSchema.validate(data);

            if (error) return res.status(400).json({ error: error.details[0].message });

            next();

        } catch (error) {
            console.log(error)
            return res.status(400).json({ error: error.details[0] })
        }
    }

}

const userValidation = validateData(userValidationSchema)

module.exports = { userValidation }