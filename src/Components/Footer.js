// Footer Component 

import { FaInstagram, FaFacebookSquare ,FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Element } from 'react-scroll';

function Footer(){
    return(
        <>
            <Element id="footer" name="footer">

                <div className='flex justify-center items-center gap-4 p-3'>
                    <div className='text-left p-3'>
                        <h3>Contact Us</h3>
                        <section>
                            <h2> Email alumni@connect.com</h2>
                            <h2> P.O Box </h2>
                            <h2> Telephone </h2>
                        </section>

                    </div>

                    <div className='flex justify-center items-center gap-3'>
                        <button className=' text-red-400'><FaFacebookSquare /></button>
                        <button className=' text-red-400'><FaInstagram/></button>
                        <button className=' text-red-400'><FaTwitter /></button>
                        <button className=' text-red-400'><FaLinkedinIn /></button>
                        <button className=' text-red-400'> Alumni Connect</button>
                    </div>

                </div>
            </Element>
        </>
    )
}

export default Footer; 
