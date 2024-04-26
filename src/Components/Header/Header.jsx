//import PropTypes from 'prop-types';
//import './Header.css'
import { Box } from '@mui/material';
import NavItem from './NavItem/NavItem';

const Header = () => {
  
  let HeaderItems = [
    {title: 'About', link: 'test'},
    {title: 'Projects', link: 'test'},
    {title: 'Contact', link: 'test'}
  ];
  
  return (
    <Box sx={{ flexDirection: 'row' }}>
      {/* map? */}
      {HeaderItems.forEach(item => {
        <NavItem title={item.title} linkRef={item.link} />
      })};

      <NavItem title={HeaderItems[0].title} linkRef={HeaderItems[0].linkRef} />
      <NavItem title={HeaderItems[1].title} linkRef={HeaderItems[1].linkRef} />
      <NavItem title={HeaderItems[2].title} linkRef={HeaderItems[2].linkRef} />
    </Box>

  )
}

//Header.propTypes = {}

export default Header;