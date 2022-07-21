import { Box, AppBar, Toolbar, IconButton, Typography, Button, styled } from '@mui/material';
import { AirplanemodeActive } from '@mui/icons-material';

const CustomToolbar = styled(Toolbar)(
  ({ theme }) => `
    background-color : ${theme.palette.brown.main};
`
);

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <CustomToolbar>
          <IconButton>
            <AirplanemodeActive color='brown' fontSize='large' />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
