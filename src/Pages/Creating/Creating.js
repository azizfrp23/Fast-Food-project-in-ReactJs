import { useState } from 'react'
import './Creating.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
const Creating = ({sub}) =>{
    const [img,setImg] = useState('')
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [info,setInfo] = useState('')
    const [active,setActive] = useState(false)
    return(
        <>
         <AiOutlineArrowRight className={active ? 'arrow active':'arrow'} onClick={() => {
             setActive(!active)
         }}/>

            <div className={active ? 'background active' : 'background'}>
                <h2>Add Food</h2>
                <form>

                    <input 
                        value={img}
                        type='tect' 
                        placeholder='Add img'
                        onChange={e => setImg(e.target.value)}
                    />
                    <input 
                        value={name}
                        type='text' 
                        placeholder='Name food'
                        onChange={e => setName(e.target.value)}

                    />
                    <input 
                        value={price}
                        type='text'
                        placeholder='Price'
                        onChange={e => setPrice(e.target.value)}
                    />
                    <input 
                        value={info}
                        type='text'
                        placeholder='Info'
                        onChange={e => setInfo(e.target.value)}
                    />
                </form>
              <div className='btn'>
                    <button
                        onClick={e =>{
                            e.preventDefault()
                            sub(img,name,price,info,setImg,setName,setPrice,setInfo)
                        }}
                    >
                        Send Food
                    </button>
              </div>

            </div>

        </>
    )
}
export default Creating