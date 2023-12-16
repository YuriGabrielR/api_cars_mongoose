import mongoose from "mongoose";

mongoose.connect('mongodb+srv://yurigabriel21:r8UH5SuOqnf0kpuK@carts.nldzw8m.mongodb.net/?retryWrites=true&w=majority').then((connect)=>{

  console.log('MongoDB Connection Succeeded');
 
}).catch((err)=>{

  console.log(`Erro: ${err}`);
  
});