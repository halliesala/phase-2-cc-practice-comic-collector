export default function ComicDetails({comic, removeComic, toggleEditMode}) {

    
    return (
        <div>
            <h3>{comic.title}</h3>
            <h4>{`Issue No. ${comic.issue}`}</h4>
            <h4>{comic.description}</h4>
            <button onClick={() => {
                toggleEditMode();
            }}>Edit</button>
            <button onClick={() => removeComic(comic.id)}>Remove</button>   
        </div>
    )
}

