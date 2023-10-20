import PizzaIcon from '/pizza-icon.svg';
import PhoneIcon from '/telephone.svg';
import EmailIcon from '/mail.svg';
import FacebookIcon from '/facebook.svg';
import UserIcon from '/user.svg';

const ActionBar = () => {
  return (
    <div
      id='action-bar'
      className='container h-24 flex flex-row items-center max-w-full bg-amber-400'
    >
      <div id='main-icon' className='basis-3/4'>
        <img src={PizzaIcon} alt='pizza' className='h-16 pl-8' />
      </div>

      <div id='social-icons' className='basis-1/12 flex'>
        <img src={PhoneIcon} alt='phone' className='h-8 pl-6' />

        <img src={EmailIcon} alt='email' className='h-8 pl-6' />

        <img src={FacebookIcon} alt='facebook' className='h-8 pl-6' />
      </div>

      <div id='user-account' className='basis-1/6'>
        <div id='main-icon' className=''>
          <img src={UserIcon} alt='user' className='h-8 pr-8 float-right' />
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
