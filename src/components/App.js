import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import React, { useEffect, useState } from 'react';

function App() {
  
  const BLANK_FORM_DATA = {
    title: "",
    issue: "",
    image_url: "",
    description: "",
  }

  const [comics, setComics] = useState([]);

  const [formData, setFormData] = useState(BLANK_FORM_DATA)

  
  useEffect(() => {
      fetch('http://localhost:8004/comics')
        .then(data => data.json())
        .then(comics => {
          console.log(comics);
          setComics(comics);
        })
    }
    ,
    []
  );

  function addComic(newComic) {
    setComics([...comics, newComic]);
    setFormData(BLANK_FORM_DATA)
  }

  function removeComic(id) {
    fetch(`http://localhost:8004/comics/${id}`, {'method': 'DELETE'})
      .then( () => {
        console.log(`Removing comic ${id}`)
        setComics(comics.filter(comic => {
          return comic.id !== id
        }))
      }
      )
  }

  function updateComic(updatedComic) {
    // find the comic with same id
    const id = comics.findIndex(comic => comic.id === updatedComic.id);
    setComics([...comics.slice(0, id), updatedComic, ...comics.slice(id + 1)])
  }

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
          <ComicsContainer comics={comics} removeComic={removeComic} updateComic={updateComic}/>
        </div>

        <div className="sidebar">
          <ComicForm formData={formData} setFormData={setFormData} addComic={addComic} />
        </div>

      </div>


    </div>
  );
}

export default App;
