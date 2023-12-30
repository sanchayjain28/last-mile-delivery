import mongoose from "mongoose"
import { DB_name } from "../constants.js"

const connectDB=async()=>{
    try{
        const coninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`,{
            writeConcern:{
                w:"majority"
            }
        })
        console.log(`\n ${coninstance.connection.host}`)
    }
    catch(error){
        console.log("MONGO DB FAIL",error)
        process.exit(1)
    }
}
export default connectDB