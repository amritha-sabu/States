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
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h3 style={{ color: "black", fontSize: "20px", fontWeight: "bold"}}> You selected </h3>
                        <h2 style={{ color: "black", fontSize: "24px", fontWeight: "bold", marginLeft: "2px" }}>
                            {selectedCity}
                        </h2>,   
                        <h3 style={{ color: "gray", fontSize: "16px",  marginLeft: "2px"}}>
                            {stateName}, {countryName}
                        </h3>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Cities;