import PropTypes from 'prop-types';
import classes from './styles.module.css';

export function Title({title,caption}) {
  return (
    <div className={classes.box} >
      {title && (
        <h1 className={classes.title}>{title}</h1>
      )}  
      {caption && (
        <label className={classes.caption}>{caption}</label>
      )}  
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
};
