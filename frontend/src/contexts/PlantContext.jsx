import {createContext, useState, useContext, useEffect} from "react"
import Favorites from "../pages/Favorites"

const PlantContext = createContext()

export const usePlantContext = () => useContext(PlantContext)

// PlantProvider provides state to any of the components that are wrapped around it
export const PlantProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (plant) => {
        setFavorites(prev => [...prev, plant])
    }

    const removeFromFavorites = (plantId) => {
        setFavorites(prev => prev.filter(plant => plant.id !== plantId))
    }

    const isFavorite = (plantId) => {
        return favorites.some(plant => plant.id === plantId)
    }
    
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <PlantContext.Provider value={value}>
        {children}
    </PlantContext.Provider>
}