import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div id='main-navigation' className='sm:grid hidden'>
      <div className='bg-white justify-self-center mt-52 z-50 grid grid-cols-3 rounded-md p-2 gap-2'>
        <div className='justify-self-start -mb-8'>
          <div className='w-56 h-64 rounded bg-[url("/menu-home.png")] bg-cover'>
            <p className='text-white font-normal text-xl text-center bg-black bg-opacity-60 py-2'>
              <Link to={'/menu'}>Menu</Link>
            </p>
          </div>
        </div>
        <div className='justify-self-center'>
          <div className='w-56 h-64 rounded bg-[url("/gallery-home.png")] bg-cover'>
            <p className='text-white font-normal text-xl text-center bg-black bg-opacity-60 py-2'>
              <Link to={'/gallery'}>Gallery</Link>
            </p>
          </div>
        </div>
        <div className='justify-self-end'>
          <div className='w-56 h-64 rounded bg-[url("/story-home.png")] bg-cover'>
            <p className='text-white font-normal text-xl  text-center bg-black bg-opacity-60 py-2'>
              <Link to={'/about'}>Story</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
