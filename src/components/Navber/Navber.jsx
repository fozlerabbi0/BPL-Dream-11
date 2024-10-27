import Logo from '../../assets/Images/logo.png'
const Navber = () => {
    return (
        <div className='flex justify-between items-center my-3 w-10/12 mx-auto  sticky top-0 z-40 backdrop-blur-2xl'>
            <a href=""><img src={Logo}alt="Cricket logo image" /></a>
            <ul className='flex gap-10 font-medium'>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Fixture</a>
                </li>
                <li>
                    <a href="">Teams</a>
                </li>
                <li>
                    <a href="">Schedules</a>
                </li>
                <li>
                    <a className='border py-2 px-5 rounded-lg' href="">$ Coin</a>
                </li>

            </ul>
        </div>
    );
};

export default Navber;