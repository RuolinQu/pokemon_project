import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchAllData, fetchData } from "./api/api";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokeCard/PokeCard";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(2);
  useEffect(() => {
    const helper = async () => {
      const allData = await fetchAllData(pageNumber);
      setPageCount(Math.ceil(allData.count / 3));
      Promise.all(
        allData.results.map(async (item) => {
          const response = await fetch(item.url);
          const itemData = await response.json();
          return {
            name: item.name,
            id: itemData.id,
            src: itemData.sprites.other["dream_world"]["front_default"],
          };
        })
      ).then((data) => {
        setData(data);
      });
    };
    helper();
  }, [pageNumber]);

  useEffect(() => {
    const helper = async () => {
      const allData = await fetchAllData(pageNumber);
      setPageCount(Math.ceil(allData.count / 3));
      Promise.all(
        allData.results.map(async (item) => {
          const response = await fetch(item.url);
          const itemData = await response.json();
          return {
            name: item.name,
            id: itemData.id,
            src: itemData.sprites.other["dream_world"]["front_default"],
          };
        })
      ).then((data) => {
        setData(data);
      });
    };
    helper();
  }, []);

  const onChangePage = (isNext) => {
    setPageNumber(prev=>isNext?(prev+1):(prev-1))
  }

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    if (searchInput) {
      const data = await fetchData(searchInput);
      setPageCount(0);
      setData([
        {
          name: data.species.name,
          id: data.id,
          src: data.sprites.other["dream_world"]["front_default"],
        },
      ]);
    } else {
      const allData = await fetchAllData(pageNumber);
      console.log("alldata", allData);
      setPageCount(Math.ceil(allData.count / 3));
      Promise.all(
        allData.results.map(async (item) => {
          const response = await fetch(item.url);
          const itemData = await response.json();
          return {
            name: item.name,
            id: itemData.id,
            src: itemData.sprites.other["dream_world"]["front_default"],
          };
        })
      ).then((data) => {
        setData(data);
      });
    }
  };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <SearchBar
          searchInput={searchInput}
          handleInput={handleInput}
          handleClick={handleClick}
        />
        <section className="content-section">
          {data.map((item) => (
            <PokemonCard data={item} />
          ))}
        </section>
        <footer className="footer">
          <button disabled={pageNumber <= 0} className="pageButton" onClick={()=>onChangePage(0)}>
            &#8592;previous page
          </button>
          <button disabled={pageNumber >= pageCount} className="pageButton" onClick={()=>onChangePage(1)}>
            next page&#8594;
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
