import { Container } from "react-bootstrap";
import { NavbarComp } from "./components/NavbarComp";
import { Header } from './components/Header';
import { Category } from "./components/Category";
import { ItemsList } from "./components/ItemsList";
import { items } from '../src/data'
import { useState } from "react";

function App() {

  //get all cats unique
  const allCats = ["الكل", ...new Set(items.map(item => item.category))]


  const [itemsData, setItemsdata] = useState(items)

  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsdata(items)

    } else {
      const newItemsData = items.filter(item => item.category === cat)
      setItemsdata(newItemsData)

    }

  }


  //filter by search form
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsdata(newArr)
    }
  }



  return (
    <div className="color-body font">


      <NavbarComp filterBySearch={filterBySearch} />

      <Container className="p-5">
        <Header />
        <Category filterByCategory={filterByCategory} allCats={allCats} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
