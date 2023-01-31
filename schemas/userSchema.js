const userSchema = {
    $jsonSchema: {
        required: ["name", "username", "password",],
        properties: {
            name: {
                firstName: {
                    bsonType: "string",
                    description: "firstName is required"
                },
                lastName: {
                    bsonType: "string",
                    description: "firstName is required"
                }
            },
            username: {
                bsonType: "string",
                description: "username is required"
            },
            password: {
                bsonType: "string",
                minLength: 8,
                description: "password should contain atleast 8 characters"
            }
        }
    }
}


module.exports = { userSchema }
