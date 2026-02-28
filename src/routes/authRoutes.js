import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router =express.Router()

router.post('/register',async (req,res)=>{
  const{username,password} = req.body
  // save the username and an irreserversibly encypted password
  // save rohalaryaveer@gmail.com | 12223.fdfd.32.4324.23.fds(key)
if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" })
  }
  //encypt the password
  const hashedPassword =bcrypt.hashSync(password,8)
  // save the new user and hashed password to the db
try {
  const user= await prisma.user.create({
    data: {
      username,
      password: hashedPassword
    }
  })

  //now that we have auser, i want to add their first todo for them
  const defaultTodo= `Hello :) Add your first todo!`
  await prisma.todo.create({
    data:{
      task: defaultTodo,
      userId:user.id
    }
  })

  // cretae a token
  const token=jwt.sign({id: user.id},process.env.JWT_SECRET, {expiresIn: '24h'})
  res.json({token})
} catch (error) {
  console.log(error.message)
  res.sendStatus(503)
}
  
  
})
router.post('/login',async (req,res)=>{
   //we get the email and we look up the password associated with that email in the databse
   //but we get it back and see its encrypted,which means that we cannot compare it to the one the user just trying to login
   //so what we can to do,is again,one way encrypt the password the user just entered 
   const{username,password}=req.body
   try {
    const user=await prisma.user.findUnique({
      where:{
        username:username
      }
    })
    if(!user) {return res.status(404).send({message: "user not found"})}
    const passwordIsvalid= bcrypt.compareSync(password,user.password)
    //if the password does not match,return out of the function
    if(!passwordIsvalid) { return res.status(401).send({message:"Invalid Passsword"})}
    console.log(user)
    //then we have a successful authentication
    const token=jwt.sign({ id:user.id},process.env.JWT_SECRET,{expiresIn: '24h'})
    res.json({token})
   } catch (error) {
    console.log(error.message)
    res.sendStatus(503)
   }


  })

export default router