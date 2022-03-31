import { useState } from "react"
import Card from "../../Components/Navbar/Card/Card"
import Navbar from "../../Components/Navbar/Navbar"
import Creating from "../Creating/Creating"
import './Main.scss'
const base = [
    {
        id:1,
        name:'Spicy Crispy Chicken Sandwich',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:1-4-product-tile-desktop',
        price:200,
        info:'composition:Crispy Chicken Fillet,Potato Roll,Spicy Pepper Sauce,Crinkle Cut Pickle.'
    },
    {
        id:2,
        name:'Big Mac',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop',
        price:150,
        info:'composition:Big Mac Bun,100% Beef Patty,Shredded Lettuce,Big Mac Sauce,Pasteurized Process American Cheese,Pickle Slices,Onions.'

    },
    {
        id:3,
        name:'Chicken McNuggets',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Chicken-McNuggets-4pc-1:1-4-product-tile-desktop',
        price:100,
        info:'composition:Chicken breast.'

    },
    {
        id:4,
        name:'World Famous Fries',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-4-product-tile-desktop',
        price:80,
        info:'composition:Potatoes.'
,
    },
    {
        id:5,
        name:'Quarter Pounder®* with Cheese',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop',
        price:120,
        info:'composition:Quarter Pound 100% Beef Patty*,Quarter Pound Bun,Pasteurized Process American Cheese,Ketchup,Pickle Slices,Onions,Mustard'


    },
    {
        id:6,
        name:'Egg McMuffin',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:1-4-product-tile-desktop',
        price:130,
        info:'composition:English Muffin,Egg,Beef meat,Pasteurized Process American Cheese,Salted Butter,Clarified Butter'
        
    },
    {
        id:7,
        name:'Sausage Burrito',
        url:'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Burrito-1:1-4-product-tile-desktop',
        price:180,
        info:'composition:Scrambled Egg Sausage And Vegetable Mix,Flour Tortilla,Pasteurized Process American Cheese'

    },
]

const Main = () =>{
    const [data,setData] = useState(base)
    const submit = (url,name,price,setImg,setName,setPrice,setInfo) =>{
        setData(prev => {
            return [
                ...prev,
                {
                    id:prev.id + 1,
                    url:url,
                    name:name,
                    price:price
                }
            ]
        })
        setImg('')
        setName('')
        setPrice('')
        setInfo('')

    }

    return(
        <>



            <div className="inline_center">
                <div className="left_side">

                    {
                        data.map(item =>(
                            <Card base={item}
                     
                            />
                        ))
                    }

                </div>
                <div className="right_side">
                    <Creating sub={submit} />

                </div>

            </div>

        </>
    )
}
export default Main