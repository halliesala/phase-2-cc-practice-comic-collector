import { useState } from 'react';
import ComicImage from './ComicImage';
import ComicDetails from './ComicDetails';
import EditForm from './EditForm';

function Comic({comic, removeComic, updateComic}) {

  const BLANK_FORM_DATA = {
    title: "",
    issue: "",
    image_url: "",
    description: "",
  }

  const [showImage, setShowImage] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [editFormData, setEditFormData] = useState(Object.assign({}, BLANK_FORM_DATA, comic));

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  function favorite() {
    const PATCH_OPTIONS = {
      'method': 'PATCH',
      'headers': {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        'body': JSON.stringify({favorite: !comic.favorite})
    }
    fetch(`http://localhost:8004/comics/${comic.id}`, PATCH_OPTIONS)
    .then(data => data.json())
    .then(patchedComic => {
        console.log(patchedComic)
        updateComic(patchedComic);
  })
  }


  return (
      <div className="comic-item" >
        <div onClick={() => setShowImage(!showImage)}>
          {/* The image should render if the details aren't displayed */}
          {/* The details should render if the image isn't displayed */}
          {
            editMode 
            ? <EditForm 
                comic={comic} 
                editFormData={editFormData} 
                setEditFormData={setEditFormData} 
                toggleEditMode={toggleEditMode} 
                updateComic={updateComic}
                setShowImage={setShowImage}
              />
            : (
                showImage 
                ? <ComicImage image_url={comic.image_url} /> 
                : <ComicDetails 
                comic={comic} 
                removeComic={removeComic} 
                editMode={editMode} 
                toggleEditMode={toggleEditMode}
                />
                )
          }

        </div>
        <button onClick={() => favorite()} className={comic.favorite ? 'favorited' : 'not-favorited'}>Favorite</button>
      </div>
  )
}

export default Comic
