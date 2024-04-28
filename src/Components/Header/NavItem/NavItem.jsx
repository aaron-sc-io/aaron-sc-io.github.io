import PropTypes from 'prop-types';
import './NavItem.css'

const NavItem = ({ title, linkRef }) => {
  
  const handleClick = () => {
    console.log(linkRef);
  };
  
  return (
    <> 
      <button
        class='new-Button'
        onClick={handleClick}> 
          {title.toUpperCase()}
      </button>
    </>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  linkRef: PropTypes.string
}

export default NavItem;