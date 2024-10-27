import ClickPlayer from '../ClickPlayer/ClickPlayer';
import PlayersList from '../PlayersList/PlayersList';
import './Selected.css'
const Selected = ({handleSeclect, seclect}) => {
    return (
        <div className=''>
            <h2>Selected.jsx</h2>
            <div className='flex'>
                <div onClick={()=>handleSeclect ("cart")} 
                    className={`${seclect.cart?"btn active":"btn"}`}>Cart</div>
                <div onClick={()=>handleSeclect ("about")}
                    className={`${seclect.cart?"btn":" active btn"}`}>About</div>
            </div>
            {seclect.cart? <PlayersList></PlayersList>:
            <ClickPlayer></ClickPlayer> }           
        </div>
        
    );
};

export default Selected;