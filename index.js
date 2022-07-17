const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
//const db=require("./models");

//Router

const postRouter1=require('./routes/unifyUMP');
const postRouter=require('./routes/unify');
app.use("/unifyUMP", postRouter1);
app.use("/unify", postRouter);
//db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("server started on port 3001");
    });
//});
