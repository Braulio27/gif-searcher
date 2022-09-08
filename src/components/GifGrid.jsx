import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (
                    <div className="progressContainer">
                        <div className="progress"></div>
                    </div>
                )
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
