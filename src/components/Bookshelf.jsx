import { useState } from 'react';

const Bookshelf = () => {

  const [books, setBooks] = useState([
    { title: 'Du Côté de chez Swann', author: 'Marcel Proust' },
    { title: 'La place', author: 'Annie Ernaux' },
    { title: 'The Books of Jacob', author: 'Olga Tokarczuk'},
    { title: 'Mother State', author: 'Helen Charman'},
  ]);
  
  const [currentBook, setCurrentBook] = useState([
    {title: "", author: ""}
  ]);

  function handleInputChange(e) {
    const newCurrentBook = structuredClone(currentBook);
    newCurrentBook[e.target.name] = e.target.value;
    setCurrentBook(newCurrentBook);
  };

  console.log(currentBook)


  function handleSubmit(e) {
    e.preventDefault();
    const newBooks = structuredClone(books);
    newBooks.push(currentBook);
    setBooks(newBooks);
    setCurrentBook({
      title: "",
      author: ""
    });
  };

  function handleReset(e) {
    setBooks([]);
  };

  function handleRemove(index) {     
    const newBooks = structuredClone(books);
    newBooks.splice(index, 1);
    setBooks(newBooks);
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="title"
              placeholder="Enter book title..."
              type="text"
              onChange={handleInputChange}
              value={currentBook.title}
            />
            <input
              name="author"
              placeholder="Enter the author..."
              type="text"
              onChange={handleInputChange}
              value={currentBook.author}
            />
            <button type="submit">Add book to your shelf.</button>
            <button onClick={handleReset}>Clear.</button>
          </form>
        </div>
      </div>
      <div className="bookCardsDiv">{ 
        books.map((book, index) => {
          return <div key={index}><li>{book.title}, {book.author}</li>
          <button onClick={() => handleRemove(index)}>Remove book</button></div>
        })
      }
      </div>
    </>
  );
};

export default Bookshelf;