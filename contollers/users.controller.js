const getUsers= (req,res)=>{
    res.status(200).send("All users")

}
const getUser= (req,res)=>{
    res.status(200).send("user info")

}
const createUser= (req,res)=>{
    res.status(200).send(" user created")

}
const updateUser= (req,res)=>{
    res.status(200).send("user updated")

}
const deleteUser= (req,res)=>{
    res.status(200).send("users deleted")

};

module.exports={
getUser,
getUsers,
createUser,
updateUser,
deleteUser
}