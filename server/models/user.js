db.createCollection("User", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["Username", "Password", "Email"],
        properties: {
          ID: {
            bsonType: "int"
          },
          Username: {
            bsonType: "string"
          },
          Password: {
            bsonType: "string"
          },
          Email: {
            bsonType: "string"
          },
          Sheet_IDs: {
            bsonType: "int"
          }
        }
      }
    }
  });