const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postsRouter = require("./routes/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();

//DB接続
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("DBと接続中・・・・・");
})
.catch((err) => {
    console.log(err);
});

//ミドルウェア
app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/posts",postsRouter);

//app.get("/", (req, res) => {
//    res.send("会社に行きたくない！寝たい！");
//})
//app.listen(PORT, () => console.log("会社に行きたくない、、、！！！"));
