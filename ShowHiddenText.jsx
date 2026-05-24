import { useState } from "react";

function Showtext() {

    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>
                Show
            </button>

            {show && (
                <p>
                    Cricket Is My Favourite Sport Because In My Childhood
                    Days I Used To Play A Lot Of Cricket
                </p>
            )}
        </>
    );
}

export default Showtext;