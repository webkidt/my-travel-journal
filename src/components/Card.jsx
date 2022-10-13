function Card() {
  let imgLink = 'https://source.unsplash.com/WLxQvbMyfas';
  return (
    <div className='card--wrapper'>
      <div className='card'>
        <img src={imgLink} alt='card image' className='card--image' />
        <div className='card--info'>
          <div className='card--location'>
            <span className='material-symbols-outlined card--pin'>location_on</span>
            <span className='card--country'>Japan</span>
            <a className='card--link' href='#'>View on Google Maps</a>
          </div>
          <h1 className='card--name'>Mount Fuji</h1>
          <h3 className='card--dates'>12 Jan, 2021 - 24 Jan, 2021</h3>
          <p className='card--description'>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380
            feet). Mount Fuji is the single most popular tourist site in Japan, for both
            Japanese and foreign tourists.
          </p>
        </div>
      </div>
      <div className='card--divider'></div>
    </div>
  );
}

export default Card;
