// MUITheme.jsx
import { createTheme } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const HOVER = {
  transition: 'filter 0.2s',
  '&:hover': {
    filter: 'drop-shadow(0 0 8px rgba(25,118,210,0.8))',
  },
};

export const WAKU = (theme) => {
  return ({
    padding: '2px', // ここはCSS的に効かない場合が多い（後述）
    margin: '0 0 8px', // ここはCSS的に効かない場合が多い（後述）
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`
  })
};
export const SUBTITLE_WAKU2 = (theme) => {
  return {
    fontSize: '0.8em',
    fontWeight: '500',
    padding: 0,
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
  };
};

export const SUBTITLE_WAKU22 = (theme) => {
  return {
    fontSize: '0.8em',
    fontWeight: '500',
    padding: 0,
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
  };
};

export const darkTheme = createTheme({
  spacing: '1px',
  palette: {
    mode: 'dark',
    primary: {
      main: '#21869c',
      // main: lightGreen[500],
    },
    secondary: {
      main: lightGreen[500],
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '10px 10px',
          margin: '10px 0',
          //　border: `1px solid ${theme.palette.primary.main}`, // ★ここが正しい！ テンプレートリテラル
          transition: 'filter 0.2s',
          '&:hover': {
            filter: 'drop-shadow(0 0 5px rgba(25, 118, 210, 0.4))',
          },
        }),
      },
    },
  },
});
