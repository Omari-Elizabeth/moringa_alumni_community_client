// Footer Component 

import { FaInstagram, FaFacebookSquare ,FaTwitter, FaLinkedinIn } from 'react-icons/fa'


function Footer(){
    return(
        <>
            <div>
                <h3>Contact Us</h3>
                <section>
                    <h2> Email alumni@connect.com</h2>
                    <h2> P.O Box </h2>
                    <h2> Telephone </h2>
                </section>

            </div>

            <div className='flex justify-center items-center gap-3'>
                <button><FaFacebookSquare /></button>
                <button><FaInstagram /></button>
                <button><FaTwitter /></button>
                <button><FaLinkedinIn /></button>
            </div>
        <span> Alumni Connect</span>

        </>
    )
}

export default Footer; 
