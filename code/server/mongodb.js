import mongoose from "mongoose";
import conf from "./config";
// const DB_URL = `mongodb://${conf.mongodb.username}:${conf.mongodb.pwd}@${conf.mongodb.address}/${conf.mongodb.db}`; // 账号登陆
const DB_URL = `mongodb+srv://${conf.mongodb.username}:${conf.mongodb.pwd}@${conf.mongodb.address}/${conf.mongodb.db}`; // 账号登陆
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL
//   , { 
//   // useMongoClient: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }
)
  .then(() => console.log("数据库连接成功！"))
  .catch((err) => console.log("数据库连接失败！" + err));
export default mongoose;
