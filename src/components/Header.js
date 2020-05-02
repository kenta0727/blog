import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="contained" color="primary">
              Kenta Blog
              </Typography>
          </Toolbar>
        </AppBar> 
      </div>
    );
  }
}

export default Header;
