
const Subscribe = () => {
    return (
        <div className="  py-4 px-4 mb-10 border-2  w-10/12 mx-auto rounded-xl border-yellow-200 relative -top-50">
            <div className=" text-center bg-green-100 rounded-xl p-6">
                <h2 className="text-4xl font-bold my-3 p-4">Subscribe to our Newsletter</h2>
                <p className="text-xl font-medium text-gray-400">Get the latest updates and news right in your inbox!</p>
                <div className="gap-4">
                <input className="border-2 w-full md:w-96 my-3 p-3 rounded-xl " type="email"placeholder="Enter your email" name="" id=""/>
                <button className="text-base font-semibold border-2 text-black py-3 px-5 rounded-xl">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;