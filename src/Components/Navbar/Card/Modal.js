import { useState } from 'react'
import './Modal.css'
const Modal = ({active,set,}) =>{
    const [valued,setValue] =useState('')

    return(
        <>
            <div className={active ? 'modal active' :'modal'} onClick={() => set(false)}>
                <div className="modal_content" onClick={e => e.stopPropagation()}>
                    <input placeholder='Amount' type='text'
                        onChange={e => setValue(e.target.value)}
                     />
                    <input placeholder='Adres' type='text' 
                        onChange={e => setValue(e.target.value)}
                    />
                    <input placeholder='Phone number' type='text'
                        onChange={e => setValue(e.target.value)}
                    />                   
                    <button
                        onClick={() => set(false)}
                            
                    >Send</button>
                        
                </div>
            </div>
        </>
    )
}
export default Modal
