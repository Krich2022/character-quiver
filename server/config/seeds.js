const User = require('../models/user');
const Character = require('../models/character');

const character1 = new Character({
    player: 'John Doe',
    name: 'Elrond Half-elven',
    class: 'Wizard',
    sub_class: 'Enchanter',
    level:  1,
    strength:  10,
    dexterity:  12,
    constitution:  14,
    intelligence:  16,
    wisdom:  15,
    charisma:  13,
    armor_class:  11,
    initiative:  2,
    speed:  30,
    hit_points:  10,
    perception:  14,
    hit_dice:  4,
  });

  const character2 = new Character({
    player: 'Jane Doe',
    name: 'Gandalf the Grey',
    class: 'Wizard',
    level:  1,
    strength:  12,
    dexterity:  10,
    constitution:  14,
    intelligence:  16,
    wisdom:  15,
    charisma:  17,
    armor_class:  11,
    initiative:  2,
    speed:  30,
    hit_points:  10,
    perception:  14,
    hit_dice:  4,
  });

  const character3 = new Character({
    player: 'John Doe',
    name: 'Frodo Baggins',
    class: 'Rogue',
    level:  1,
    strength:  10,
    dexterity:  14,
    constitution:  12,
    intelligence:  12,
    wisdom:  14,
    charisma:  14,
    armor_class:  12,
    initiative:  3,
    speed:  30,
    hit_points:  10,
    perception:  15,
    hit_dice:  4,
  });

  // Save characters to the database
  await Promise.all([character1.save(), character2.save(), character3.save()]);


  const user = new User({
    username: 'johndoe',
    email: 'john.doe@example.com',
    password: '1234password', // In a real scenario, you would hash the password
    sheets: [character1._id, character2._id, character3._id],
  });

  await user.save();

  console.log('Database has been seeded with a user and three characters.');

seedDatabase().catch((error) => console.error(error));