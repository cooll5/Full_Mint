const mongoose = require("mongoose");
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    from: String,
    hash: String,
    gasPriceHex: String
});

const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;