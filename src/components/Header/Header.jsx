import Banner from '../../assets/Images/banner-main.png'

const Header = () => {
    return (
        <div className="bg-pink-300 w-10/12 mx-auto my-6 text-center rounded-xl">
            <div>
                <div className='flex justify-center pt-10'>
                    <img src={Banner} alt="" />
                </div>

                <h1 className="text-2xl fon  my-6">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="font-bold text-gray-400">
                    Beyond Boundaries Beyond Limits
                </p>
                <span className="border-2 border-yellow-300 px-2 py-5 rounded-xl">
                    <button className="font-bold text-base rounded-lg bg-gradient-to-r from-yellow-500 via-pink-600 to-yellow-300 py-3 px-5 my-5">Claim Free Credit</button>
                </span>
            </div>
        </div>


    );
};

export default Header;