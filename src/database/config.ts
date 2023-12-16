import mongoose from "mongoose";

const dbAcess: string | any = process.env.MONGO_URI;

mongoose.connect(dbAcess).then((connect)=>{

  console.log('MongoDB Connection Succeeded');

 
}).catch((err)=>{ 

  console.log(`Erro: ${err}`);
  
});