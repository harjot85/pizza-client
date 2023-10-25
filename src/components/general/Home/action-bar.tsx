import PizzaIcon from '/pizza-icon.svg';
import PhoneIcon from '/telephone.svg';
import EmailIcon from '/mail.svg';
import FacebookIcon from '/facebook.svg';
import UserIcon from '/user.svg';

const ActionBar = () => {
  return (
    <div
      id='action-bar'
      className='h-24 flex flex-row items-center  bg-amber-400'
    >
      <div id='main-icon' className='grow'>
        <img src={PizzaIcon} alt='pizza' className='h-16 pl-8' />
      </div>

      <div id='social-icons' className='flex'>
        <img src={PhoneIcon} alt='phone' className='h-8 pl-6' />

        <img src={EmailIcon} alt='email' className='h-8 pl-6' />

        <img src={FacebookIcon} alt='facebook' className='h-8 pl-6' />

        <img src={UserIcon} alt='user' className='h-8 px-6 ml-6' />
      </div>
    </div>
  );
};

export default ActionBar;
