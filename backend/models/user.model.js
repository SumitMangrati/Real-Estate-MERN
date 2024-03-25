import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        default: 'https://media.istockphoto.com/id/1300845620/nl/vector/gebruikerspictogramflat-ge%C3%AFsoleerd-op-witte-achtergrond-gebruikerssymbool-vectorillustratie.jpg?s=612x612&w=0&k=20&c=4dASe2yO6fHasNA10-bfURiAvIPrDSwUTgMO9C40h2w=',
    }
}, { timestamps: true });

const User = mongoose.model('User' , userSchema);

export default User;