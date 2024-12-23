import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://denishghetiya:Dpatel06@cluster0.9pqbm.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
