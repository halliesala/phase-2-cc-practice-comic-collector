function ComicForm({formData, setFormData, addComic}) {

  function handleChange(e) {
    const key = e.target.name;
    const val = e.target.value;
    const newFormData = Object.assign({}, formData, {[key]: val})
    setFormData(newFormData);
    // console.log(`${key}: ${val}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const POST_OPTIONS = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      'body': JSON.stringify(formData)
    }
    fetch('http://localhost:8004/comics', POST_OPTIONS)
    .then(data => data.json())
    .then(newComic => {
      console.log(newComic)
      addComic(newComic);
    })
  }

  return (

    <form className="comic-form" onSubmit={handleSubmit} >

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input 
        name="image_url" 
        value={formData.image_url}
        onChange={handleChange}
      />

      <label htmlFor="title">Title: </label>
      <input 
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="issue">Issue Number: </label>
      <input 
        name="issue" 
        type="number" 
        value={formData.issue}
        onChange={handleChange}
      />

      <label htmlFor="description">Description: </label>
      <input 
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <input 
        type="submit" 
        value="Add Issue"
      />

    </form>

  )
}

export default ComicForm
