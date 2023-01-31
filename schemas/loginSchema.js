const loginSchema = {
    $jsonSchema: {
        required: ["username", "password"],
        properties: {
            username: {
                bsonType: "string",
                description: "username is required"
            },
            password: {
                bsonType: "string",
                minLength:8,
                description: "password should contain atleast 8 characters"
            }
        }
    }
}


module.exports = { loginSchema }
