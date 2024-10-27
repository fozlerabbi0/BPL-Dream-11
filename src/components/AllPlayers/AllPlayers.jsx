import { useEffect, useState } from 'react';
import './AllPlayers.css'
const AllPlayers = () => {
    const [singlePlayer, setSinglePlayer] = useState([]);

    useEffect(()=> {
        fetch('blogs.json')
        .than(res => res.json())
        .than(data => console.log(data)
        )
    },[])

    return (
        <div>
            <h2>Available Players</h2>
        </div>
    );
};

export default AllPlayers;