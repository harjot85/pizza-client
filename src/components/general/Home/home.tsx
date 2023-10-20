import ActionBar from './action-bar';
import MainNavigation from './main-navigation';

export const Home = () => {
  return (
    <div className='container max-w-full bg-amber-400 h-screen'>
      <ActionBar />

      <div className='absolute bottom-0 w-full bg-[url("/pizza-main.jpg")] h-4/6'>
        <MainNavigation />

        <div id='contact-phone'>Phone</div>
      </div>
    </div>
  );
};
