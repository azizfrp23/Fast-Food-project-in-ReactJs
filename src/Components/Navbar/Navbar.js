import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () =>{
    return(
        <>
            <div className='nav'>
                <h2>Fast-Food.KG</h2>
                <ul className='list'>
                    <li>
                        <Link to={''}>
                            Menu
                        </Link>
                    </li> 
                    <li>
                        <Link to={'/about'}>
                            About
                        </Link>
                    </li>

                </ul>

            </div>
        </>
    )
}
export default Navbar