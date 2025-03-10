import { useState, useEffect } from "react";

const Cities = ({countryName, stateName}) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://crio-location-selector.onrender.com/country=${countryName}/state=${stateName}/cities`);
                const data = await response.json();
                setCities(data);
                console.log(data)
            }catch(error){
                console.error(error);
            }
        }
        if(countryName && stateName)
        fetchData();
    },[countryName, stateName]);


    return(
        <div>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="" disabled>Select City</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </select>
            {countryName && stateName && selectedCity ? (
                <div>
                    <h2><bold>You selected  
                    <span style={{ color: "black", fontSize: "24px", fontWeight: "bold", marginLeft: "2px" }}>
                        {selectedCity}
                    </span>,
                    <span style={{ color: "gray", fontSize: "16px" }}>
                        {stateName}, {countryName}
                    </span>
                    </bold></h2>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Cities;