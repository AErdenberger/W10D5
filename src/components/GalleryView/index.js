import { useParams } from "react-router-dom"

export function GalleryView() {
    let {galleryId} = useParams();
    console.log(galleryId)
    return (
        <h1>Hello from GalleryView</h1>
    )
}