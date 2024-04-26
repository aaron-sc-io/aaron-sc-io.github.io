//import PropTypes from 'prop-types';
import './NavItem.css'

const NavItem = ({ title, linkRef }) => {
  console.log(title);
  
  return (
    <> 
      <button
        class='new-Button'> 
          {title.toUpperCase()}
      </button>
    </>
  );
}

//Header.propTypes = {}

export default NavItem;