import Cities from "./Cities";
import { useEffect, useState } from "react";

const States = ({countryName}) => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    
        useEffect(() => {
            const fetchData = async () =>{
                try{
                    const response = await fetch(`https://crio-location-selector.onrender.com/country=${countryName}/states`);
                    const data = await response.json();
                    setStates(data);
                    console.log(data);
                }catch(error){
                    console.error('Error fetching data', error);
                }
            }
            
            if(countryName)
            fetchData();
        }, [countryName]);
    return(
        <div>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            <option value="" disabled>Select State</option>
            {states.map((state, index) => (
                <option key={index} value={state}>{state}</option>
            ))}
        </select>
        <Cities countryName={countryName} stateName={selectedState} />
        </div>
    );
};

export default States;