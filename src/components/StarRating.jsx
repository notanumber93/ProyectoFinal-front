import React, { useState, useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Context } from "../store/appContext";

const StarRating = (props) => {
    const { store, actions } = useContext(Context);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label key={i}>
                    
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => {setRating(ratingValue); actions.setRating2(props.user_id, props.movie_id, ratingValue, props.year, props.poster, props.title);}}
                        
                    />
                   

                    <FaStar
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        onMouseEnter={()=>setHover(ratingValue)}
                        onMouseLeave={()=>setHover(null)}
                      
                    />
                </label>
            
            );
        })}
        </div>
    );
};
    
export default StarRating;