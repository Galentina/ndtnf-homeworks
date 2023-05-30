import Book from '../types/bookType'
import ReactCover from '../Assets/React-cover.png'
import TsCover from '../Assets/TS-cover.png'

const Library: Book[] = [
    {
        id: 1,
        name: 'Learn TS',
        author: 'Author 1',
        isbn: '978-3-16-148410-0',
        cover: TsCover
    },
    {
        id: 2,
        name: 'Learn React',
        author: 'Author 2',
        isbn: '978-3-16-234562-1',
        cover: ReactCover
    }
]

export default Library