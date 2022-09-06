const { request, response } = require("express");

const pathMiddleware =(request , response , next) =>{

    console.log("pathMiddleware started");
    next();
    console.log("pathMiddleware eneded")
}

module.exports ={
    pathMiddleware,
}