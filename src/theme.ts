import { createTheme } from '@mui/material';

const defaultTheme = createTheme();

const customization = createTheme({
  palette: {
    brown: defaultTheme.palette.augmentColor({
      color: {
        main: '#A52A2A',
      },
      name: 'brown',
    }),
  },
});

export default customization;
