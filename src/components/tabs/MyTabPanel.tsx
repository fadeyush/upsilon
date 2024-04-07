import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductsCatalog from '../productCatalog/ProductsCatalog';

const MyTabPanel: FC = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Список товаров" value="1" />
              <Tab label="Каталог товаров" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2"> <ProductsCatalog/></TabPanel>
        </TabContext>
      </Box>
    );
};

export default MyTabPanel;