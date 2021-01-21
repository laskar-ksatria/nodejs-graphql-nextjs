import mongoose from 'mongoose';

const mongoUri = 'mongodb://localhost/next-graphql'

function mongoDBconnect() {
    return new Promise((res, rej) => {
        mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            res()
        });
    })
}

export default mongoDBconnect;