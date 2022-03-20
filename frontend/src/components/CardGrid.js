import React, {useContext, useState} from 'react'
import rings from '../assets/rings.JPG'
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';
import backendURL from '../config';

function CardGrid(props) {
    const items = props.data;
    const shop = props.shop;
    const inputText = props.input;
    const {user} = useContext(LoginContext);
    
    const [favbool, setFavbool] = useState(false);
    
    const addAsFav = (item) => {
        
        if(!favbool) {
            setFavbool(true)
            var item = {...item, user: user}
            axios.post(`${backendURL}/addFav`, item).then((res) => {
                if (res.status==200){
                    console.log("Added");
                } else {
                    console.log("Not Added");
                }
            }).catch((err) => console.log(err));
        }
        else {
            setFavbool(false)
            var data = {id: item.id, user: user}
            axios.post(`${backendURL}/deleteFav`, data).then((res) => {
                if (res.status==200){
                    console.log("Deleted");
                } else {
                    console.log("Not Deleted");
                }
            }).catch((err) => console.log(err));

        }
    }

    const filteredData = items.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText);
            // return el.text.toLowerCase().includes(props.input)
        }
    })
   
  return (
    <div>
        {filteredData.map((item, index) => {

        var tag = <p>Out of Stock</p>
        if (item.quantity>0) {
            tag = <button onClick={() => shop(item)} class="btn btn-default add-to-cart" ><i class="fa fa-shopping-cart"></i>Add to cart</button>
        }
        return(
            <div class="col-sm-4" key={item.id}>
                <div class="product-image-wrapper">
                    <div class="single-products">
                            <div class="productinfo text-center">
                            <img src = {item.picture} alt="shirt_logo" height={200} width={150} className="img-card-image" />
                                <h2>${item.price}</h2>
                                <p>{item.name}</p>
                            </div>
                            <div class="product-overlay">
                                <div class="overlay-content">
                                    <h2>{item.price}</h2>
                                    <p>{item.shop}</p>
                                    {/* <button onClick={() => shop(item)} class="btn btn-default add-to-cart" ><i class="fa fa-shopping-cart"></i>Add to cart</button> */}
                                    {tag}
                                </div>
                            </div>
                    </div>
                    <div class="choose">
                        <ul class="nav nav-pills nav-justified">
                            <li id='wishlist' onClick={()=>addAsFav(item)} value={favbool}><i class="fa fa-plus-square"></i>Add to wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
        })}
    </div>
  )
}

export default CardGrid