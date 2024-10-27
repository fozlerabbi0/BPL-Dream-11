import { useEffect, useState } from 'react';
import './AllPlayers.css'

const AllPlayers = () => {

    const [singlePlayer, setSinglePlayer] = useState([]);
    
    useEffect (() =>{
        const allPlayerDataLoad = async() => {
            const res = await fetch('blogs.json')
            const data = await res.json()
            setSinglePlayer(data);
            
        }
        allPlayerDataLoad()
    },[])

    
    
    return (
        <div>
            <h2>Available Players</h2>
        </div>
    );
};

export default AllPlayers;