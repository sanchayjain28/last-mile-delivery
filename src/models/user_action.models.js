import mongoose from "mongoose";

const actionsSchema = new mongoose.Schema({
    name: { type: String }
});

const Action = mongoose.model('Action', actionsSchema);
export default Action