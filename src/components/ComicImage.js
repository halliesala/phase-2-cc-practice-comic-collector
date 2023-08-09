export default function ComicImage({ image_url }) {

    function handleClick(e) {
        console.log('clicked')
    }
    return (
        <>
            <img src={image_url} alt={"Comic Issue Cover"} />
            
        </>
    )

}