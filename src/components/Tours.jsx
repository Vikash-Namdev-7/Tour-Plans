
import Card from './Card.jsx'

function Tours({tours, removeHandler}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return  <Card key={tour.id} {...tour} removeHandler={removeHandler}></Card> 
                    })
                }
            </div>
        </div>
    )
}

export default Tours;