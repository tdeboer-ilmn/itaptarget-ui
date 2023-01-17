import React from 'react';
import { SvgIcon, makeStyles } from '@material-ui/core';
import config from '../config';

const useStyles = makeStyles({
  root: {
    height: 'unset',
  },
});

const OTLogo = props => {
  const classes = useStyles();
  const tagline = config.profile.otLogoTagline ?? '';

  return (
        //   <SvgIcon
        //   xmlns="http://www.w3.org/2000/svg"
        //   viewBox="0 0 1659.66 346.78"
        //   {...props}
        //   classes={classes}
        // >
        //   <path
        //     fill="#f5dab8"
        //     d="M45.05 262.19a37.12 37.12 0 110-74.23h214.77v74.24z"
        //     transform="translate(-7.94 -6.26)"
        //   />
        //   <path
        //     fill="#e28743"
        //     d="M171 278.81v37.12a37.12 37.12 0 01-74.24 0v-37.12z"
        //     transform="translate(-7.94 -6.26)"
        //   />
        //   <path
        //     fill="#f5dab8"
        //     d="M185.58 80.5V43.38a37.12 37.12 0 0174.24 0V80.5z"
        //     transform="translate(-7.94 -6.26)"
        //   />
        //   <path
        //     fill="#e28743"
        //     d="M96.76 97.11h214.75a37.12 37.12 0 110 74.24H96.76z"
        //     transform="translate(-7.94 -6.26)"
        //   />
        //   <text
        //     fill="#3488c8"
        //     style={{
        //       fontSize: '50px',
        //       fontWeight: '500',
        //       fontFamily: 'Inter, sans-serif',
        //     }}
        //     transform="translate(1660 261.35)"
        //     textAnchor="end"
        //   >
        //     <tspan>{tagline}</tspan>
        //   </text>
        // </SvgIcon>
        <img src='/itaptargets/assets/img/iTAP_targets_Color_Transparent.png' height='60'/>
  );
};

export default OTLogo;
