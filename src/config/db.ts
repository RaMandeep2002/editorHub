import mongoose from "mongoose"

export const connectdb = async(): Promise<void> =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/editorhub");
        console.log("DB connected successfully..!!");
    }
    catch(error : any){
        console.log("Error ====> ", error);
        process.exit(1);
    }
}