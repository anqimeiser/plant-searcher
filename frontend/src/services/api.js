const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://perenual.com/api";

        console.log(API_KEY);
        console.log(BASE_URL);

export const getAllPlants = async (pages=3) => { // can change how many pages here
    try {
        let allPlants = [];

        for (let page = 1; page <= pages; page++){
            const response = await fetch(`${BASE_URL}/species-list?key=${API_KEY}&page=${page}`);
            const data = await response.json();
            if (data.data){
                allPlants = [...allPlants, ...data.data];
            }
        }
        return allPlants;
    } catch(error){
        console.error("Error fetching plants:", error);
        return [];
    }
}

export const getPopularPlants = async () => {
    try{
        const response = await fetch(`${BASE_URL}/species-list?key=${API_KEY}&page=1`); //gets the first page
        const data = await response.json();
        //return data.results;
        return data.data || [];
    }
    catch (error){
        console.error("Error fetching popular plants:", error);
        return [];
    }
};

export const searchPlants = async (query) => {
    try{
        const response = await fetch(
            `${BASE_URL}/species-list?key=${API_KEY}&q=${encodeURIComponent(query)}
        `);
        const data = await response.json();
        return data.data || [];
    }
    catch (error){
        console.error("Error searching plants:", error);
        return [];
    }
};

