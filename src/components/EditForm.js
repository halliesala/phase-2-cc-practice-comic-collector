export default function EditForm({comic, toggleEditMode, editFormData, setEditFormData, updateComic, setShowImage}) {
    


    function handleChange(e) {
      const key = e.target.name;
      const val = e.target.value;
      const newFormData = Object.assign({}, editFormData, {[key]: val})
      setEditFormData(newFormData);
      // console.log(`${key}: ${val}`);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      
      const PATCH_OPTIONS = {
          'method': 'PATCH',
          'headers': {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            'body': JSON.stringify(editFormData)
        }
        fetch(`http://localhost:8004/comics/${comic.id}`, PATCH_OPTIONS)
        .then(data => data.json())
        .then(patchedComic => {
            console.log(patchedComic)
            // TODO: update comics array
            updateComic(patchedComic);
            toggleEditMode();
            setShowImage(false);
      })
    }
  
    return (
  
      <form className="comic-form" onSubmit={handleSubmit} >
  
        <h2>Edit Issue</h2>
  
        <label htmlFor="image_url">Image URL: </label>
        <input 
          name="image_url" 
          value={editFormData.image_url}
          onChange={handleChange}
        />
  
        <label htmlFor="title">Title: </label>
        <input 
          name="title"
          value={editFormData.title}
          onChange={handleChange}
        />
  
        <label htmlFor="issue">Issue Number: </label>
        <input 
          name="issue" 
          type="number" 
          value={editFormData.issue}
          onChange={handleChange}
        />
  
        <label htmlFor="description">Description: </label>
        <input 
          name="description"
          value={editFormData.description}
          onChange={handleChange}
        />
  
        <input 
          type="submit" 
          value="Submit Edits"
        />
  
      </form>
  
    )
  }
    