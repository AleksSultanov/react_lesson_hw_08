import PropTypes from 'prop-types';
import classes from './styles.module.css';

export function Button({ children, click, disabled }) {
  return (
    <button
      className={classes.button}
      onClick={click}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  click: PropTypes.func,
  disabled: PropTypes.bool,
};
