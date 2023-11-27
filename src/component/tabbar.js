import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './tabbar.css';
export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{marginTop:'10px'  }}>
        <Tab id='tab'  value="one" label="See & Do" />
        <Tab id='tab' value="two" label="Plan Your Trip" />
        <Tab id='tab' value="three" label="Travel Essentials" />
        <Tab id='tab' value="three" label="Country's Calender" />
        <Tab id='tab' value="three" label="Experiences" />
        <Tab id='tab' value="three" label="Saudi Map" />

        

      </Tabs>
    </Box>
  );
}