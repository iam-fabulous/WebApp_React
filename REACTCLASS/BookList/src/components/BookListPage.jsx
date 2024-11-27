import React,{useState} from "react";
import style from "../styles/bookListPage.module.css";

const BookListPage = () => {

    const books = ["Name of the wind","The Wise Man's Fear", "Kafka on the Shore", "The Master and the Margarita"]

    const [bookList, setBookList]= useState(books)// setBookList updates the state of bookList as given to it by useState()
	const [searchInput, setSearchInput]= useState("");

    const addBook = (event)=>{
        console.log(event)
        event.preventDefault();
        const newBook = event.target[0].value;
		if(newBook.trim()){
			setBookList([...bookList, newBook]);
		} // never update your state directly
         //console.log(newBook);
        event.target[0].value = "";
    }

    const handleDelete = (index)=>{
        setBookList(bookList.filter((_, i)=>(i != index)));
    }

	
	const handleChange = (event)=>{
		setSearchInput(event.target.value);
	};

	const filterBooks = bookList.filter((book)=>
		book.toLowerCase().includes(searchInput.toLowerCase())
	);


	// const searchBook = (event)=> {
	// 	event.preventDefault();
	// 	const searchInput = event.target[0].value;
	// 	for(let search = 0; search < books.length; search++){
	// 		const title = books[search].textContent
	// 		if(title.toLowerCase().includes(content)){
	// 			setBookList([...bookList, searchInput])
	// 			//books[search].parentElement.style.display = "block"
	// 			// console.log(title)
	// 		}
	// 		else{
	// 			books[search].parentElement.style.display = "none"
	// 		}
	// 	}
	// }

// 	const searchBook = document.querySelector('#search-books input')
// 	searchBook.addEventListener("input", (event)=>{
//     event.preventDefault();
//     const bookName = document.querySelectorAll('.name')
//     const content = event.target.value
//     // console.log(content)
//     for (let search = 0; search < bookName.length; search++){
//         const title = bookName[search].textContent
//         if(title.toLowerCase().includes(content)){
//             bookName[search].parentElement.style.display = "block"
//             // console.log(title)
//         }
//         else{
//             bookName[search].parentElement.style.display = "none"
//         }
//     }
// })

    return(
        <div id={style.wrapper}>
	    <header>
	    	<div id={style.pageBanner}>
	    		<h1 className={style.title}> Book Collections</h1>
                <p>Books</p>
	    	</div>
			<form  id={style.pageBanner}>
                    <input type="text" placeholder="Search books..." value={searchInput} onChange={handleChange}  />
            </form>
	    </header>
		   

	    <div id={style.bookList}>
	    	<h2 className={style.title}>Books to Read</h2>
	    	<ul>
                {
                    filterBooks.map((book, index)=>(
                    <li key={index}>
	    			    <span className={style.name}>{book}</span>
	    			    <span onClick={()=>handleDelete(index)} className={style.delete}>delete</span>
	    		    </li>
                    ))
                }
	    	</ul>
	    </div>
        <form onSubmit={addBook} id={style.addBook}>
	    	<input type="text" placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
    )
};

export default BookListPage;