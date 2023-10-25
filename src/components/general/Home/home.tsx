import ActionBar from './action-bar';
import MainNavigation from './main-navigation';
import PhoneIcon from '/telephone.svg';

export const Home = () => {
  return (
    <>
      <div className='bg-amber-400 h-screen'>
        <ActionBar />

        <MainImage />

        <MainNavigation />
      </div>

      <PhoneNumber />
    </>
  );
};

const MainImage = () => (
  <div className='absolute bottom-0 w-full bg-[url("/pizza-main.jpg")] h-4/6' />
);

const PhoneNumber = () => (
  <div
    id='contact-phone'
    className='-mt-32 mb-16 z-50 sticky flex justify-center items-center'
  >
    <div className='flex bg-white sm:px-12 rounded-md px-6'>
      <span className='p-2'>
        <img src={PhoneIcon} alt='phone' className='sm:h-12 h-6' />
      </span>
      <span className='sm:p-5 sm:text-2xl sm:font-semibold p-2 text-xl font-medium'>
        <a href='tel: 604-701-3334'>(604) 701-3334</a>
      </span>
    </div>
  </div>
);
