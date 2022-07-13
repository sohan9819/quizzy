import { FiMoon, FiSun } from 'react-icons/fi';

export const ThemeToggler = () => {
  return (
    <label htmlFor='toggler-checkbox' className='toggler'>
      <input type='checkbox' id='toggler-checkbox' />
      <span className='ball'></span>
      <FiSun className='sun' />
      <FiMoon className='moon' />
    </label>
  );
};
