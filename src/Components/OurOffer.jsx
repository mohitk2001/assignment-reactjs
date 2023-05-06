import React from 'react'
import "./OurOffer.css"
import chitos from "../Assets/Images/chitos.png"
export const OurOffer = () => {
  return (
    <div className='our_offer' id='offers'>
        <div className="offer_container">
            <div className="offer_left_content">
                <h1>See our Offers</h1>
                <p>Visit us today and take advantage of our amazing offers!</p>
                <button>SEE OFFERS</button>
            </div>
            <div className='offer_right_content'>
                <img src={chitos} alt="chitos" />
            </div>

        </div>
    </div>
  )
}
