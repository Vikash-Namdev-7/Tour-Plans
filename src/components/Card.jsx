import { useState } from "react"


function Card({id, name, info, image, price, removeHandler}) {

    const [readMore, setReadMore] = useState("false")

    const description = `${info.substring(0, 200)}.... `;

    console.log()

    return (
        <div className="card">
             <img src={image} className="image" />

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {readMore ? description : info}

                    <span className="read-more" onClick={()=> {setReadMore(!readMore)}}> 
                        {readMore ? "Read More" : "Show Less"} 
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={() => removeHandler(id)}>Not Interested</button>
        </div>
    )
}

export default Card;