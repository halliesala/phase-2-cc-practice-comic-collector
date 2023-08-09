import Comic from "./Comic"

function ComicsContainer({comics, removeComic, updateComic}) {

  return (
    <>
      {comics.map(comic => {
        return (
          <Comic key={comic.id} comic={comic} removeComic={removeComic} updateComic={updateComic}/>
        )
      })}
    </>
  )

}

export default ComicsContainer
