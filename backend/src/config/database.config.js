import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model.js";
import { SpicesModel } from "../models/spices.model.js";
import { sample_users } from "../data.js";
import { sample_spicy } from "../data.js";
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;

set('strictQuery', true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedSpicies();
    console.log('connect successful!!!');
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log('Users seed is already done!');
    return;
  }

  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }

  console.log('Users seed is done!');
}
async function seedSpicies() {
  const spices = await SpicesModel.countDocuments();
  if (spices > 0) {
    console.log('spices seed is already done!');
    return;
  }

  for (const food of sample_spicy) {
    food.imageUrl = `/spices/${food.imageUrl}`;
    await SpicesModel.create(food);
  }

  console.log('spices seed Is Done!');
}

