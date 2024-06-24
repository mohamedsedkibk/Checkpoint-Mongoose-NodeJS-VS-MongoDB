const express= require('express')
const app= express()
 const mongoose= require('mongoose')
 const user= require('./model/user.schema');
const port=5000

app.use(express.json());

 mongoose.connect('mongodb+srv://mohamedsedkiboukadida:hama@cluster1.znpfkvq.mongodb.net/')
 .then(()=>console.log("data base connected"))
 .catch ((err)=>console.log('err',err))

app.post('/add-user',(req,res)=>{
 const newUser= {
    firstname: 'med' ,
    lastname: 'bk' ,
    age:20
 }
 const usertoadd= new user(newUser)
 usertoadd.save()
 .then(() => res.status(200).json('User created successfully!'))
 .catch((err) => {
     console.log('err', err);
     res.status(500).json('Error creating user');
 });
})

app.put('/update-user/:id' , (req,res) => {
    const newUser = {
        firstName : 'Sedki',
        lastName : 'Boukadida' ,
        age : 80
    }

        user.updateOne({_id: req.params.id}, newUser  )
    .then(() => res.status(200).json('User updated successfully!'))
    .catch((err) => {
        console.log('err', err);
        res.status(500).json('Error update user');
    })
})

 
app.delete('/delete-user/:user_id',(req,res)=>{
    user.deleteOne({_id:req.params.user_id})
    .then(() => res.status(200).json('User deleted successfully!'))
    .catch((err) => {
        console.log('err', err);
        res.status(500).json('Error delete user');
    });
}
)






app.listen(port,(err)=>{
err? console.log('error',err) : console.log(`server is connecting ${port}`)

     
}) 