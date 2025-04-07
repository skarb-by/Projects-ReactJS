import React, { useEffect, useState } from 'react';
import './index.scss';
import Preloader from './Pages/Preloader.js'
import Collection from './Collection.jsx';
import Paginations from './Paginations.js';

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]

function App() {
  const [categoryId, setCategoryId] = useState(0)
  const [collections, setCollections] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [collectionsPerPage] = useState(2);

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : '';

    fetch(`https://65b0c72fd16d31d11bdd38e2.mockapi.io/photos?${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка при получении данных')
      }).finally(() => setIsLoading(false))
  }, [categoryId])

  const lastCollectionsIndex = page * collectionsPerPage;
  const firstCollectionsIndex = lastCollectionsIndex - collectionsPerPage;
  const currentCollections = collections.slice(firstCollectionsIndex, lastCollectionsIndex)
  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {isLoading ? (<Preloader />) : (cats.map((obj, i) => <li
            onClick={() => setCategoryId(i)}
            className={categoryId === i ? 'active' : ''}
            key={obj.name}
          >
            {obj.name}
          </li>
          ))
          }
        </ul>
        <input value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {currentCollections.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj, index) => (
            <Collection key={index}
              name={obj.name}
              images={obj.photos}
            />
          ))}
      </div>
      <Paginations
        collectionsPerPage={collectionsPerPage}
        totalCollections={collections.length}
        page={page}
        paginate={paginate}
        setPage={setPage} />

    </div>
  );
}

export default App;