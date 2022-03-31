import { useState } from 'react'
import {FcInfo} from 'react-icons/fc'
import Modal from './Modal'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
const Card = ({base}) =>{
const [modalActive,setModal]= useState(false)
const [state,setState] = useState(0)
const preved = () =>{
    setState(state - 1)
}
const nexed = () =>{
    setState(state + 1)
}

    return(
        <>
            

            <div className="food">
                <div className="img_food">
                    <img src={base.url} key={base.id}/>
                </div>
                <div className="info">
                    <i>{base.name}</i>
                    <p>price:{base.price}сом</p>
                    <button className='btn_info'

                    key={base.id}><FcInfo/></button>
                    <button className='buy'
                        onClick={() =>{
                            setModal(true)
                        }}
                    >Buy</button>
 
                    
                </div>
            </div>
               
            
            
            <Modal active={modalActive} set={setModal} data={base} />

        </>
    )
}
export default Card