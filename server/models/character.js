db.createCollection("Character", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["user_id", "name"],
        properties: {
          __id: {
            bsonType: "int"
          },
          user_id: {
            bsonType: "int"
          },
          name: {
            bsonType: "string"
          },
          class: {
            bsonType: "string"
          },
          sub_class: {
            bsonType: "string"
          },
          background: {
            bsonType: "string"
          },
          alignment: {
            bsonType: "string"
          },
          level: {
            bsonType: "int"
          },
          xp: {
            bsonType: "int"
          },
          xp_type: {
            bsonType: "boolean"
          },
          str: {
            bsonType: "int"
          },
          dex: {
            bsonType: "int"
          },
          con: {
            bsonType: "int"
          },
          int: {
            bsonType: "int"
          },
           wis: {
             bsonType: "int"
          },
           char: {
             bsonType: "int"
          },
            ac: {
             bsonType: "int"
          },
          proficiencies: {
            bsonType: "string"
          },
          saving_throws: {
            bsonType: "string"
          },
          ac: {
            bsonType: "int"
          },
          speed: {
            bsonType: "int"
          },
          hp: {
            bsonType: "int"
          },
          temp_hp: {
            bsonType: "int"
          },
          equipment: {
            bsonType: "string"
          },
          traits: {
            bsonType: "string"
          },
          ideals: {
            bsonType: "string"
          },
          bonds: {
            bsonType: "string"
          },
          flaws: {
            bsonType: "string"
          },
          languages: {
            bsonType: "string"
          },
          money: {
            bsonType: "int"
          },
          abilities: {
            bsonType: "string"
          },
          spells: {
            bsonType: "string"
          },
        }
      }
    }
  });