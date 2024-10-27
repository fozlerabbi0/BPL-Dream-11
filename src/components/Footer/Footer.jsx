import FooterLogo from '../../assets/Images/logo-footer.png'
const Footer = () => {
    return (
        <footer className='bg-pink-100'>
            <div className='flex justify-center flex-grow'>
                <img src={FooterLogo} alt="Footer image" />
            </div>
            <div className=' grid grid-cols-1 md:flex justify-between w-10/12 mx-auto my-10 text-start'>
                <div>
                    <h3 className='text-xl mb-4 font-semibold text-white'>About Us</h3>
                    <p className='font-semibold text-slate-400 my-2'>We are a passionate team <br />dedicated to providing the best <br />services to our customers.</p>
                </div>
                <div>
                    <h3 className='text-xl mb-4 font-semibold text-white'>Quick Links</h3>
                    <ul>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">Home</a></li>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">Services</a></li>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">About</a></li>
                        <li className='my-2'><a className='font-semibold text-slate-400 my-2' href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl mb-4 font-semibold text-white'>Subscribe</h3>
                    <p className='font-semibold text-slate-400 my-2'>Subscribe to our newsletter for the <br />latest updates.</p>
                    <div>
                        <input className='w-64 boder-2 my-3 rounded-lg py-2 px-3' type="email" placeholder='Enter your email' name="" id="" />
                        <button className='text-base font-semibold bg-gray-200 py-2 px-3 from-yellow-500  to-pink-300'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-600' />
            <p className='text-center py-5'>
                <small className='font-semibold text-slate-400'>@2024 Your Company All Rights Reserved.
                </small>
            </p>
        </footer>
    );
};

export default Footer;