import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='w-full'>
      <Link to='/'>
        <div className='text-white text-2xl font-bold md:text-4xl lg:text-5xl ml-4 pt-2'>
          Front-end Moivies App
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
