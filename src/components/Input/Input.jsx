import './input.css';
import { IoMdCall, IoMdLock, IoIosMail, IoIosAt, IoIosContact } from 'react-icons/io';

const Input = ({ error, className, disabled, fullWidth, multiline, helperText, startIcon, endIcon, value, size, row, labelText, placeholder }) => {
  let inputStyle = '';
  let labelStyle = '';
  let helperTextStyle = '';

  /* error styling*/

  if (error) {
    inputStyle += ' input__error ';
    labelStyle += ' label__error ';
    helperTextStyle += ' helperText__error ';
  }

  /* disabled */

  if (disabled) {
    inputStyle = ' input__disabled ';
    labelStyle = ' label__disabled';
  }

  /* size styling */

  if (size === 'sm') {
    inputStyle += ' input__size-sm ';
  } else {
    inputStyle += ' input__size-md ';
  }

  /* fullWidth*/
  if (fullWidth) {
    className += ' input__fullWidth ';
  }

  /* Icons */

  switch (startIcon) {
    case 'call':
      startIcon = <IoMdCall className='start-icon' />;
      break;
    case 'lock':
      startIcon = <IoMdLock className='start-icon' />;
      break;
    case 'mail':
      startIcon = <IoIosMail className='start-icon' />;
      break;
    case 'at':
      startIcon = <IoIosAt className='start-icon' />;
      break;
    case 'contact':
      startIcon = <IoIosContact className='start-icon' />;
      break;
    default:
      startIcon = null;
  }

  switch (endIcon) {
    case 'call':
      endIcon = <IoMdCall className='end-icon' />;
      break;
    case 'lock':
      endIcon = <IoMdLock className='end-icon' />;
      break;
    case 'mail':
      endIcon = <IoIosMail className='end-icon' />;
      break;
    case 'at':
      endIcon = <IoIosAt className='end-icon' />;
      break;
    case 'contact':
      endIcon = <IoIosContact className='end-icon' />;
      break;
    default:
      endIcon = null;
  }

  if (startIcon) {
    inputStyle += ' input__start-icon ';
  }
  if (endIcon) {
    inputStyle += ' input__end-icon ';
  }

  if (multiline) {
  }

  return (
    <div className={'container-button ' + className}>
      {multiline ? (
        <textarea className={'input multiline ' + inputStyle} disabled={disabled} value={value} placeholder={placeholder} rows={row} id='textarea' />
      ) : (
        <input type='text' className={'input ' + inputStyle} disabled={disabled} value={value} placeholder={placeholder} id='input' />
      )}

      <p className={'label ' + labelStyle} id='label'>
        {labelText}
      </p>
      <p className={'helperText ' + helperTextStyle} id='helperText'>
        {helperText}
      </p>

      {startIcon}
      {endIcon}
    </div>
  );
};

export default Input;
