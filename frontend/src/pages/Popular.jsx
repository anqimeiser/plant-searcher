import PlantCard from "../components/PlantCard";
import { useState, useEffect } from "react";
import { getPopularPlants } from "../services/api";
import "../css/Home.css"; // reuse styles

function Popular() {
    const [plants, setPlants] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopular = async () => {
            try {
                const popularPlants = await getPopularPlants();
                setPlants(popularPlants);
            } catch (err) {
                console.log(err);
                setError("Failed to load popular plants...");
            } finally {
                setLoading(false);
            }
        };
        loadPopular();
    }, []);

    return (
        <div className="popular">
            <h2>Popular Plants</h2>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="plants-grid">
                    {plants.map((plant) => (
                        <PlantCard plant={plant} key={plant.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Popular;
