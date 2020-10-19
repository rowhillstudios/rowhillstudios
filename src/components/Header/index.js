import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../../images/Logo.png';
import HomePage from '../../containers/HomePage/index';
import Contactus from '../../containers/ContactUs/index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    backgroundColor: '#2e303d',
  },
  logo: {
    width: '10%',
    height: '10%',
    borderRadius: '100px',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <img src={Logo} className={classes.logo} alt="rowhillstudio" />

      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          className={classes.tab}
        >
          <LinkTab label="Home Page" href="/homepage" {...a11yProps(0)} />
          <LinkTab label="Services" href="/services" {...a11yProps(1)} />
          <LinkTab label="Portfolio" href="/portfolio" {...a11yProps(2)} />
          <LinkTab label="About Us" href="/aboutus" {...a11yProps(3)} />
          <LinkTab label="Contact" href="contact" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomePage />{' '}
      </TabPanel>

      <TabPanel value={value} index={1}>
        Services
      </TabPanel>
      <TabPanel value={value} index={2}>
        Portfolio
      </TabPanel>
      <TabPanel value={value} index={3}>
        About Us
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Contactus />
      </TabPanel>
    </div>
  );
}
