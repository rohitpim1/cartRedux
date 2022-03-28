import React from 'react'

 const Home = (props) => {
  return (
    <div className="cart-wrapper">
        <div className='img-wrapper item'>
            <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.imagemobiles.com%2Fwp-content%2Fuploads%2F2022%2F01%2FWhatsApp-Image-2022-01-11-at-12.13.54-PM.jpeg&imgrefurl=https%3A%2F%2Fwww.imagemobiles.com%2F&tbnid=LL_9HLjS0wa7dM&vet=12ahUKEwjTg5T5kOn2AhUkT3wKHe3cDS8QMygBegUIARDaAQ..i&docid=2e6k2ADlwrW-ZM&w=600&h=600&q=mobile%20images&ved=2ahUKEwjTg5T5kOn2AhUkT3wKHe3cDS8QMygBegUIARDaAQ' alt="mobile"/>
        </div>
        <div className='text-wrapper item'>
            <span>phone</span>
            <span>Price:$1000.00</span>
        </div>
        <div className='btn-wrapper item'>
            <button
            onClick={()=>{props.addToCartHandler({price:1000,name:"iphone"})}}
            >Add to cart</button>
        </div>
    </div>
  )
}

export default Home;
