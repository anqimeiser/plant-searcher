import "../css/Favorites.css"
import { usePlantContext } from "../contexts/PlantContext"
import PlantCard from "../components/PlantCard"

function Favorites(){
    const { favorites } = usePlantContext();
    
    if (favorites){
        return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="plants-grid">
                {favorites.map(plant => (
                    <PlantCard plant={plant} key={plant.id}/>
                ))}
            </div>
        </div>
    )}

    return <div className="favorites-empty">
        <h2>No Favorite Plants Yet</h2>
        <p>Start adding plants to your favorites and they will appear here</p>
    </div>
}

export default Favorites