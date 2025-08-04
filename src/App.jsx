import './App.css';
import * as React from 'react';

import { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Switch from '@mui/material/Switch';
import { Subtitles } from '@mui/icons-material';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// ToggleButton Color
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


import { HOVER, WAKU, SUBTITLE_WAKU2, darkTheme } from './MUITheme/MUITheme';
import CustomizedSwitches from './Components/CustomizedSwitches';
import ThemeColorTester from './Components/ThemeColorTester';

function App() {
  const [value, setValue] = React.useState(0);
  const [alignment, setAlignment] = React.useState('web');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography variant={Subtitles}>あああ</Typography>
      <Paper>aaa</Paper>

      <Container
        sx={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          zIndex: 1200,
          height: "350px",
        }}
      >
        <Box sx={{ display: "flex", with: "100px" }}>
        <Container sx={(theme) => ( {...WAKU(theme) })} >



            <ToggleButtonGroup
              color="primary"
              value={alignment}
              orientation="vertical"
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              sx={{ display: 'flex' ,width:"90px",height:"100%"}}
            >
              <ToggleButton sx={{ flex: 1, HOVER }} value="web">
                Web
              </ToggleButton>
              <ToggleButton sx={{ flex: 1, HOVER }} value="android">
                Android
              </ToggleButton>
              <ToggleButton sx={{ flex: 1, HOVER }} value="ios">
                iOS
              </ToggleButton>
            </ToggleButtonGroup>
          </Container>

          <Container sx={(theme) => ( {...WAKU(theme) })} >

          <Switch defaultChecked />
          <CustomizedSwitches></CustomizedSwitches>
          </Container>
          {/* テーマカラーテスター */}
          <ThemeColorTester></ThemeColorTester>
        </Box>
      </Container>
    </ThemeProvider>
  </>;
}

export default App;
