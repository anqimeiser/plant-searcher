import "../css/PlantCard.css"
import { usePlantContext } from "../contexts/PlantContext"

function PlantCard({plant}) {

    const {isFavorite, addToFavorites, removeFromFavorites} = usePlantContext()
    const favorite = isFavorite(plant.id)


    function onFavoriteClick(e){
        //alert("clicked")
        e.preventDefault()
        if (favorite) removeFromFavorites(plant.id)
        else addToFavorites(plant)
    }

    return <div className="plant-card">
        <div className="plant-poster">
            <img
                src={
                    plant.default_image?.small_url ||
                    plant.default_image?.medium_url ||
                    plant.default_image?.thumbnail_url ||
                    "https://via.placeholder.com/500"
                }
                alt={plant.common_name || "Unnamed Plant"}/>
            <div className="plant-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                ❤
                </button>
            </div>
        </div>
        <div className="plant-info">
            <h3>{plant.common_name || "Unnamed Plant"}</h3>
            <p>
                {plant.scientific_name ? plant.scientific_name.join(", ") : ""}    
            </p>
        </div>
    </div>
}


export default PlantCard