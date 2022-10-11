import logo from '../assets/world-white.svg';

function Header() {
  return (
    <div className='header'>
      <img className='header--logo' src={logo} alt='globe logo' />
      <h5 className='header--title'>my travel journal.</h5>
    </div>
  );
}

export default Header;
