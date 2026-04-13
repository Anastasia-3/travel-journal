export default function Entry(props) {
    return(
        <div id="travel-card">
            <div id="img-block">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div id="text-info-block">
                <div id="location-block">
                    <div id="marker-icon"></div>
                    <p id="country-name">{props.country}</p>
                    <a href={props.googleMapsLink} id="google-maps-link" title={props.title}>View on Google Maps</a>
                </div>
                <h2 id="location-title">{props.title}</h2>
                <p id="date"><b>{props.dates}</b></p>
                <p id="description-text">{props.text}</p>
            </div>
        </div>
    )
}