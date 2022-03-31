import './About.scss'
import {BsClockHistory} from 'react-icons/bs'
import {FaShippingFast} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
const About = () =>{
    return(
        <>
           <div className="background_about">
               <h1>Fast-Food.<span>KG</span></h1>
           </div>
           <div className='center_about'>
               <h1>About us</h1>
               <div className='content'>
                    <img src='https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg' />
                    <h1>24/7 <BsClockHistory className='clock'/></h1>
                    <h2>Working</h2>
               </div>
               <div className='contents'>
                   <img src='https://wallpaperbat.com/img/293602-wallpaper-tomato-hamburger-patty-sandwich-fast-food-bun.jpg'/>
                   <h1>Fast delivery <FaShippingFast className='fast'/></h1>
               </div>
               <div className='contacts'>
                   <h1>Contacts</h1>
                   <div className='phone'>
                       <h2><BsFillTelephoneFill />+996********</h2>
                       <h2><BsFillTelephoneFill  />+996*******</h2>
                   </div>
               </div>
        
           </div>
        </>
    )
}
export default About