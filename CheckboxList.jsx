import { useState } from "react";

function CheckboxList() {

    const [skills, setSkills] = useState([]);

    function handleSkills(e) {

        const { value, checked } = e.target;

        if (checked) {

            // Add skill
            setSkills((prev) => [...prev, value]);

        } else {

            // Remove skill
            setSkills((prev) =>
                prev.filter((skill) => skill !== value)
            );
        }
    }

    return (
        <>
            <h2>Select Skills</h2>

            <label>
                <input
                    type="checkbox"
                    value="React"
                    onChange={handleSkills}
                />
                React
            </label>

            <br />

            <label>
                <input
                    type="checkbox"
                    value="Node"
                    onChange={handleSkills}
                />
                Node
            </label>

            <br />

            <label>
                <input
                    type="checkbox"
                    value="Java"
                    onChange={handleSkills}
                />
                Java
            </label>

            <br />

            <label>
                <input
                    type="checkbox"
                    value="SQL"
                    onChange={handleSkills}
                />
                SQL
            </label>

            <hr />

            <h2>Selected Skills:</h2>

            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </>
    );
}

export default CheckboxList;