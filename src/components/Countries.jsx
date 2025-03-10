import { useState, useEffect } from "react";
import States from "./States";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('https://crio-location-selector.onrender.com/countries');
                const data = await response.json();
                setCountries(data);
                console.log(data);
            }catch(error){
                console.error('Error fetching data', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                <option value="" disabled>Select Country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
            <States countryName={selectedCountry} />
        </div>
    );
};

export default Countries;