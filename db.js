const mongoose = require('mongoose')

const connectDB = () => {
    return mongoose.connect('mongodb+srv://kamalesh_db_user:8nsqF71zFcpDCKlB@<cluster-name>.mongodb.net/roleDB?retryWrites=true&w=majority')
        .then(() => console.log('MongoDB Atlas connected'))
}

module.exports = connectDB
