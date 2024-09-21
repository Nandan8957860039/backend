const { Schema, model } = reqire("../connection")

const mySchema = new Schema({
    title: { type: String },
    brand: { type: String },
    category: { type: String },
    model: String,
    price: Number,
    createdAt: { type: Data, Default: Date.now }
})
moodule.exports = model('Product', mySchema)