const mongoose = require("mongoose")

const dbConnection = async (url) => {
    await mongoose.connect(url)
}

module.exports = dbConnection