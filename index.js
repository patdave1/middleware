const express = require('express');
const userRouter = require("./routes/users.route")
const {globalMiddleware} = require("./middlewares/globalMiddleware")

const app = express();

app.use(globalMiddleware)

app.get("/" ,(req,res) =>{
    res
    .status(200)
    .send("welcome to my server .please use / users to get all users")
})

app.use('/users',userRouter);

app.listen(4000 ,(err)=>{
    console.log(" Server listening on http://localhost:4000");
});