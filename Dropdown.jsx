import { useState } from "react";

function DependentDropdown() {

    const [country, setCountry] = useState("");
    const [stateName, setStateName] = useState("");
    const [city, setCity] = useState("");



    // Country Change
    function handleCountry(e) {

        setCountry(e.target.value);

        // reset state & city
        setStateName("");
        setCity("");
    }



    // State Change
    function handleState(e) {

        setStateName(e.target.value);

        // reset city
        setCity("");
    }



    return (
        <>
            <h2>Dependent Dropdown</h2>

            {/* Country Dropdown */}
            <select
                value={country}
                onChange={handleCountry}
            >
                <option value="">
                    Select Country
                </option>

                <option value="India">
                    India
                </option>

                <option value="USA">
                    USA
                </option>
            </select>

            <br /><br />



            {/* State Dropdown */}
            <select
                value={stateName}
                onChange={handleState}
            >
                <option value="">
                    Select State
                </option>

                {country === "India" && (
                    <>
                        <option value="Tamil Nadu">
                            Tamil Nadu
                        </option>

                        <option value="Kerala">
                            Kerala
                        </option>
                    </>
                )}

                {country === "USA" && (
                    <>
                        <option value="California">
                            California
                        </option>

                        <option value="Texas">
                            Texas
                        </option>
                    </>
                )}
            </select>

            <br /><br />



            {/* City Dropdown */}
            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option value="">
                    Select City
                </option>

                {stateName === "Tamil Nadu" && (
                    <>
                        <option value="Chennai">
                            Chennai
                        </option>

                        <option value="Coimbatore">
                            Coimbatore
                        </option>
                    </>
                )}

                {stateName === "Kerala" && (
                    <>
                        <option value="Kochi">
                            Kochi
                        </option>

                        <option value="Trivandrum">
                            Trivandrum
                        </option>
                    </>
                )}

                {stateName === "California" && (
                    <>
                        <option value="Los Angeles">
                            Los Angeles
                        </option>

                        <option value="San Diego">
                            San Diego
                        </option>
                    </>
                )}

                {stateName === "Texas" && (
                    <>
                        <option value="Houston">
                            Houston
                        </option>

                        <option value="Dallas">
                            Dallas
                        </option>
                    </>
                )}
            </select>

            <hr />

            <h3>Country: {country}</h3>
            <h3>State: {stateName}</h3>
            <h3>City: {city}</h3>
        </>
    );
}

export default DependentDropdown;