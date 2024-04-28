import NavItem from './NavItem/NavItem';

const Header = () => {
  let HeaderItems = [
    {title: 'About', link: 'About'},
    {title: 'Projects', link: 'Projects'},
    {title: 'Contact', link: 'Contact'}
  ];
  
  return (
      <>
        {HeaderItems.map(item => {return (<NavItem title={item.title} linkRef={item.link} />)})}
      </>
  )
};

export default Header;