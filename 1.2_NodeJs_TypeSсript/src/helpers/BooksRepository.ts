import IBook from '../types/bookType'
import { BookModel } from '../models/BookModel'

export const createBook = async (book: IBook) => {
    try {
       const newBook = new BookModel(book)
       await newBook.save
    } catch (e) {
       console.log(e)
    }
}
export const getBook = async(id: number) => {
    try {
        return await BookModel.findById(id)
    } catch (e) {
        console.error(e)
    }
}
export const getBooks = async() => {
    try {
        return await BookModel.find()
    } catch (e) {
        console.error(e)
    }
}
export const updateBook = async(id: string, book: IBook) => {
    try {
        const foundBook = await BookModel.findById(id)
        await foundBook.updateOne(book)
        return foundBook
    } catch (e) {
        console.error(e)
    }
}
export const deleteBook = async(id: number) => {
    try {
        await BookModel.deleteOne({ _id: id })
    } catch (e) {
        console.error(e)
    }
}