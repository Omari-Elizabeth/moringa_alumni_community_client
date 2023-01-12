// Footer Component 

import { FaInstagram, FaFacebookSquare ,FaTwitter, FaLinkedinIn } from 'react-icons/fa'


function Footer(){
    return(
        <>
            <div className='bg-cloud-burst-600 '>
                <div className='flex pb-8' >
                    <div className='p-7 w-2/3'>
                        <h3 className='text-2xl font-bold text-international-orange-600 '>Contact Us</h3>
                        <section>
                            <h2 className='text-lg font-bold text-international-orange-600 '> Email: <span className='italic'>alumni@connect.com</span></h2>
                            <h2 className='text-lg font-bold text-international-orange-600 '> P.O Box : <span className='italic'>28860-0100 </span> </h2>
                            <h2 className='text-lg font-bold text-international-orange-600 '> Telephone:<span className='italic'>0734567823 </span></h2>
                        </section>
                    </div>
                    <div>
                        <h3 className=' pt-5 pb-5  text-2xl font-bold text-international-orange-600 '>Location</h3>
                        <div >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.16244016024!2d36.7846067!3d-1.3004862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1673513978283!5m2!1sen!2ske" title='google-map' width="700" height="150" className='float-right' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                       
                    </div>
                </div>
                
                <div  className='flex justify-center items-center gap-36 '>
                    <button className='w-12'><FaFacebookSquare /></button>
                    <button ><FaInstagram /></button>
                    <button><FaTwitter /></button>
                    <button><FaLinkedinIn /></button>
                </div>
                <span className='pb-20 text-lg text-international-orange-600' > Alumni Connect</span>
            </div>
           

        </>
    )
}

export default Footer; 
