import "./Card.css"

export default function Card(props){
    return(
        <div className="Card">
            <div className="Card--container">
                <img className="Card--image" alt="Japan" src={props.imageUrl}></img>
                <div className="Card--textDiv">
                    <div className="Card--location">
                        <img  height= '9.55px' alt="Japan" src="https://img.icons8.com/ios-filled/512/F55A5A/marker.png"></img>
                        <span className="Card--location--Name">{props.location}</span>
                        <a href={props.googleMapsUrl} className="Card--location--URL">View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <div className="Card--textDiv--date">
                        {props.startDate} - {props.endDate}
                    </div>

                    <div className="Card--textDiv--desc">
                    {props.description}
                    </div>
                </div>
            </div>
            <div className="Card--line"> </div>
        </div>
    );
}