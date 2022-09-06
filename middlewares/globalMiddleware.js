const { request, response } = require("express");

const globalMiddleware =(request , response , next) =>{

    console.log("globalmiddleware started");
    next();
    console.log("global middle ware eneded")
}

module.exports ={
    globalMiddleware,
}