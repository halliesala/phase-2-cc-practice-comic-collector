import { useState } from 'react';
import ComicImage from './ComicImage';
import ComicDetails from './ComicDetails';

function Comic({comic, removeComic}) {

  const [showImage, setShowImage] = useState(true);

  return (
    <div className="comic-item" onClick={() => setShowImage(!showImage)}>

      {/* The image should render if the details aren't displayed */}
      {/* The details should render if the image isn't displayed */}
      { 
        showImage 
        ? <ComicImage image_url={comic.image_url} /> 
        : <ComicDetails comic={comic} removeComic={removeComic}/>
      }
    </div>
  )

}

export default Comic
