import React from 'react';
import { SvgIcon, withStyles } from '@material-ui/core';
import logo from './iTAP_genetics_Color_Transparent.png';
const styles = () => ({
  root: {
    height: 'unset',
  },
});

const OTLogo = ({ classes, ...rest }) => {
  return (
    <img src={logo} height='60'/>
  );
};

export default withStyles(styles)(OTLogo);
