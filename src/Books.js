import React from "react";
import Book from "./Book";
import pic from "./assets/pic.jpeg";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpg";
import pic6 from "./assets/pic6.jpg";
import pic7 from "./assets/beast.jpg";
import pic8 from "./assets/habbits.jpg";

const Books = () => {
  const books = [
    {
      img: pic,
      author: "Victoria Secret",
      title: "Beauty picks",
    },
    {
      img: pic1,
      author: "Momen Shwqi",
      title: "Worrior",
    },
    {
      img: pic2,
      author: "churchill Shwqi",
      title: "Change",
    },
    {
      img: pic3,
      author: "Ahlam ",
      title: "Be Strong",
    },
    {
      img: pic4,
      author: "Swsan",
      title: "Worrior",
    },
    {
      img: pic5,
      author: "Freed Shwqi",
      title: "Worrior",
    },
    {
      img: pic6,
      author: "Winston Churchill",
      title: "Beast mode",
    },
    {
      img: pic7,
      author: "David valahlah",
      title: "Habbits",
    },
    {
      img: pic8,
      author: "David valahlah",
      title: "Habbits",
    },
  ];
  return (
    <div>
      <div className="header"> 
      <h1 className="headerText">Books</h1>
      </div>

      <div>
        <Book books={books} />
      </div>
    </div>
  );
};

// const properties = ()=> {
//     <Book img ={props.book.img}/>
// }
export default Books;
