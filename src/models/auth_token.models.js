import mongoose from 'mongoose';

const AccessTokenT = new mongoose.Schema(
    {
        time: { type: Date, required:true },
        AccessToken:{type:String , required:true}
    })


export const AccessToken = mongoose.model('AccessToken', AccessTokenT);


