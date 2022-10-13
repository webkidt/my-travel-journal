function Card(props) {
  let imgLink = 'https://source.unsplash.com/WLxQvbMyfas';
  return (
    <div className='card--wrapper'>
      <div className='card'>
        <img src={props.imageUrl} alt='card image' className='card--image' />
        <div className='card--info'>
          <div className='card--location'>
            <span className='material-symbols-outlined card--pin'>location_on</span>
            <span className='card--country'>{props.location}</span>
            <a className='card--link' href={props.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h1 className='card--name'>{props.title}</h1>
          <h3 className='card--dates'>{`${props.startDate} - ${props.endDate}`}</h3>
          <p className='card--description'>{props.description}</p>
        </div>
      </div>
      {!props.isLast && <div className='card--divider'></div>}
    </div>
  );
}

export default Card;
