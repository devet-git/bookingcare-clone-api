import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const sequelize = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USER, process.env.DEV_DB_PW, {
   host: 'localhost',
   dialect: 'mysql',
   logging: false
});
const connectDB = async () => {
   try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');

   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }
}

export default connectDB;