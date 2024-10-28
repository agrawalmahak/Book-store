import { Link } from "react-router-dom"
// import { PiBookOpenTextLight } from 'react-icons/pi';
import { BsBook } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md'
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({books}) => {
    return (
        <div className="grid sm:grid-cols-2 md-grid-cols-3 lg-grid-cols-4">
            {books.map((item) => (  
                <BookSingleCard key={item._id} book={item}/>
            ))}
        </div>
    )
}

export default BooksCard
