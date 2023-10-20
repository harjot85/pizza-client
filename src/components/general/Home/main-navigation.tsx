import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div id='main-navigation' className='grid'>
      <div className='bg-white w-1/2  justify-self-center h-48'>
        <Link to={'/menu'}> Menu</Link> | Gallery | Story
      </div>
    </div>
  );
};

export default MainNavigation;
