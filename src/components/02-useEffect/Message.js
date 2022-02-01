import React, { useEffect, useState } from 'react'

export const Message = () => {
const [coords, setCoords] = useState({x: 0, y:0});
const { x, y } = coords;
const mouseMove = (e) => {
    const coords = {x: e.x, y:e.y};
    setCoords(coords);
    console.log(coords)
}

    useEffect(() => {
        console.log('componente montado');
        window.addEventListener('mousemove', mouseMove);

        return () => {
            console.log('componente demontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <div>
            <h3>eres genial</h3>
            <div>
                x: {x}, y: {y}
            </div>
        </div>
    )
}
