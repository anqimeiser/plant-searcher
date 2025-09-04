import PlantCard from "../components/PlantCard"
import {useState, useEffect} from "react"
import { searchPlants, getAllPlants } from "../services/api";
import "../css/Home.css";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [plants, setPlants] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /** loads plants */
  useEffect(() => {
    const loadPlants = async () => {
      try {
        const allPlants = await getAllPlants(5); // first 5 pages
        setPlants(allPlants);
      } catch (err) {
        console.log(err);
        setError("Failed to load plants...");
      } finally {
        setLoading(false);
      }
    };

    loadPlants();
  }, []); 

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);
        try{
            const searchResults = await searchPlants(searchQuery)
            setPlants(searchResults)
            setError(null)
        } catch(err){
            console.log(err)
            setError("Failed to search plants...");
        }finally {
            setLoading(false)
        }

        //setSearchQuery("")

        //alert(searchQuery)
    };

    return <div className="home">
      
        <h2>Home</h2>
        
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for Plants..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            <button 
                type="submit" 
                className="search-button">Search
            </button>
        </form>

            {error && <div className="error-message">{error}</div>}

        {/* if we are loading,  we want to display loading, otherwise we display the movies grid*/}
        {loading ? (<div className="loading">Loading...</div>
        ) : (
                    <div className="plants-grid">
            {plants.map((plant) => (
                        plant.common_name &&
                        plant.common_name
                            .toLowerCase()
                            .startsWith(searchQuery.toLowerCase()) && (
                            <PlantCard plant={plant} key={plant.id} />
                        )
                    ))}
        </div>
        )}
    </div>

}

export default Home