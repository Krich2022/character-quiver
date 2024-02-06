const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false
}).then(() => console.log('MongoDB connected'))
 .catch((err) => console.log(err));

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