import { model, Schema } from 'mongoose'
import IBook from '../types/bookType'

const bookSchema = new Schema<IBook>({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: ''
    },
    isbn: {
        type: String,
        default: ''
    },
    cover: {
        type: String,
        default: ''
    }
})

export const BookModel = model('BookModel', bookSchema)