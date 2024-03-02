import { createMuiTheme } from '@material-ui/core/styles';
import { grey, red, green, orange, blue } from '@material-ui/core/colors';
import { Fade } from '@material-ui/core';

/*
    https://material-ui.com/customization/default-theme/#default-theme
*/

const dummyTheme = createMuiTheme();

const getContrastText = dummyTheme.palette.getContrastText;
const augmentColor = dummyTheme.palette.augmentColor;
const shadows = dummyTheme.shadows;

const paletteLight = {
  type: 'light',
  primary: augmentColor({ main: '#333A4A' }),
  secondary: augmentColor({ main: '#F78E1E' }),
  tertiary: augmentColor({ main: '#F9D147' }),
  text: {
    primary: '#343A49',
  },
  error: {
    main: red[500],
  },
  success: {
    main: green[500],
  },
  warning: {
    main: orange[500],
  },
  info: augmentColor({ main: blue[500] }),
  action: {
    // active: "#000000",
    // //hover: "#000000",
    // hoverOpacity: 1,
    // selected: "#000000",
    // selectedOpacity: 1,
    //disabled: "#ff0000",
    //disabledBackground: "#ff0000",
    disabledOpacity: 0,
    // focus: "#000000",
    // focusOpacity: 1,
    // activatedOpacity: 1
  },
  divider: '#80808040',
  background: {
    paper: '#FFFFFF',
    default: '#F0F0F0',
  },
  data: [
    '#60CDBB',
    '#F47560',
    '#E9C1A0',
    '#E7A838',
    '#F1E05B',
    '#97E3D5',
    blue[500],
    green[500],
    red[500],
  ],
};

const paletteDark = {
  ...paletteLight,
  type: 'dark',
  background: {
    paper: '#333A4A',
    default: '#221f1f',
  },
  text: {
    primary: getContrastText('#221f1f'),
  },
};

const paletteByType = (type) => {
  switch (type) {
    case 'light':
      return paletteLight;
    case 'dark':
      return paletteDark;
    default:
      return paletteLight;
  }
};

const shape = {
  borderRadius: 4,
};

const theme = {
  title: 'Regis authoring theme',
  paletteByType: paletteByType,
  palette: paletteByType(),

  typography: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 10,
    },
    caption: {
      fontSize: 10,
    },
    h1: {
      fontSize: 24,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
      lineHeight: 'reset',
    },
    h2: {
      fontSize: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    h3: {
      fontSize: 18,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    h4: {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    h5: {
      fontSize: 12,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    h6: {
      fontSize: 10,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 1,
    },
    overline: {
      fontSize: 8,
    },
    gutterBottom: {
      marginBottom: 32,
    },
  },

  spacing: 5,
  shape,

  transitions: {
    duration: {
      //complex: 1000,
      enteringScreen: 500,
      leavingScreen: 500,
      //short: 250,
      //shorter: 200,
      //shortest: 150,
      //standard: 300,
    },
  },

  props: {
    MuiTooltip: {
      arrow: true,
      TransitionComponent: Fade,
      enterDelay: 500,
    },
    MuiTabs: {
      indicatorColor: 'primary',
    },
    MuiTab: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiSelect: {
      variant: 'outlined',
      margin: 'dense',
    },
    MuiFormControl: {
      variant: 'outlined',
    },
  },

  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
};

const overrides = {
  /*
      Target release: beyond MVP
      MuiSlider
  */
  MuiSlider: {
    root: {},
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -10,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
        backgroundColor: 'currentColor',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50%)',
      top: -40,
    },
    track: {
      height: 4,
      borderRadius: 2,
    },
    rail: {
      height: 4,
      borderRadius: 2,
    },
  },

  /*
      Target release: beyond MVP
      MuiSwitch
  */
  MuiSwitch: {
    switchBase: {
      '&$checked': {
        color: theme.palette.info.main,
        '& + $track': {
          opacity: 0.5,
          backgroundColor: theme.palette.info.main,
          borderColor: theme.palette.info.main,
        },
      },
    },
  },

  /*
        Target release: beyond MVP
        MuiDialogTitle
    */

  MuiDialogTitle: {
    root: {
      padding: theme.spacing * 2,
    },
  },

  MuiToggleButton: {
    root: {
      '&$selected': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        },
      },
    },
    sizeSmall: {
      padding: '3px 6px',
    },
    label: {
      fontSize: 14,
      textTransform: 'none',
    },
  },

  MuiListItem: {
    root: {
      '&$selected': {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.info.contrastText,
        '&:hover': {
          backgroundColor: theme.palette.info.light,
        },
      },
    },
    secondaryAction: {
      paddingRight: 32,
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: 40,
    },
  },
  MuiListItemSecondaryAction: {
    root: {
      right: 0,
    },
  },
  MuiButton: {
    root: { minWidth: 32 },
    label: {
      fontSize: theme.typography.body1.fontSize,
    },
    text: {
      textTransform: 'none',
    },
    contained: {
      textTransform: 'none',
    },
    outlined: {
      textTransform: 'none',
    },
  },
  MuiSelect: {
    root: {},
  },
  MuiStepper: {
    root: {
      background: 'none',
      border: 'none',
      padding: 0,
    },
  },
  MuiStepIcon: {
    root: {},
    completed: {
      color: green[500] + '!important',
    },
    active: {
      color: orange[500] + '!important',
    },
  },
  MuiTabs: {
    root: {
      minHeight: theme.spacing * 10,
      background: theme.palette.background.paper,
      paddingLeft: theme.spacing,
      paddingRight: theme.spacing,
    },
    indicator: {
      height: theme.spacing * 8,
      borderRadius: theme.shape.borderRadius / 2,
      background: theme.palette.background.default,
      zIndex: 0,
      bottom: theme.spacing,
    },
  },
  MuiTab: {
    root: {
      zIndex: 4,
      minWidth: '50px !important',
      minHeight: theme.spacing * 10,
    },
    wrapper: {
      fontSize: theme.typography.body1.fontSize,
      textTransform: 'none',
    },
  },
  MuiTooltip: {
    tooltip: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: 'normal',
      backgroundColor: paletteLight.background.default,
      color: getContrastText(paletteLight.background.default),
      boxShadow: shadows[4],
      padding: 8,
    },
    arrow: {
      fontSize: 16,
      '&::before': {
        backgroundColor: paletteLight.background.default,
        borderColor: 'transparent',
      },
    },
  },
  MuiAlert: {
    root: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  MuiLinearProgress: {
    root: {
      height: '8px',
    },
  },
  MuiCircularProgress: {
    circle: {
      strokeLinecap: 'round',
    },
  },
  MuiTableRow: {
    head: {
      "& [class^='MuiTableCell'], & [class*=' MuiTableCell']": {
        borderLeft: '1px solid ' + theme.palette.divider,
      },
      //     root: {
      //         "&$selected": {
      //             backgroundColor: theme.palette.info.main,
      //             color: theme.palette.info.contrastText,
      //             "&:hover": {
      //                 backgroundColor: theme.palette.info.light
      //             }
      //         }
      //     }
    },
  },
  MuiTableCell: {
    root: {
      borderBottom: '1px solid ' + grey[200],
      fontSize: 14,
    },
    sizeSmall: {
      paddingTop: theme.spacing,
      paddingLeft: theme.spacing * 2,
      paddingBottom: theme.spacing,
      paddingRight: theme.spacing * 2,
    },
  },
  MuiToolbar: {
    dense: {
      paddingLeft: theme.spacing * 2,
      paddingRight: theme.spacing * 2,
    },
  },
  MuiAvatar: {
    root: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  MuiChip: {
    sizeSmall: {
      padding: 0,
      height: 18,
      labelSmall: {},
    },
  },

  // Making progress indicator thicker
  MuiLinearProgress: {
    root: {
      height: '8px',
      borderRadius: shape.borderRadius,
    },
    bar: {
      borderRadius: shape.borderRadius,
    },
  },
};

theme.overrides = overrides;

/*
  Breakpoints
**/
// const breakpoints = {
//   values: {
//     xs: 0,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1920
//   }
// }

/* 
  Multipliers for each breakpoint
**/
const multiplier = {
  xs: 1,
  sm: 0.75,
  md: 0.9,
  lg: 1,
  xl: 1.25,
};

const muiTheme = createMuiTheme();

theme.scaleParams = (params) => {
  var output = {};

  Object.entries(params).forEach((param) => {
    const [paramName, paramInitial] = param;

    output[paramName] = paramInitial;

    Object.entries(multiplier).forEach((breakpoint) => {
      const [breakpointName, breakpointMultiplier] = breakpoint;

      var paramOutput = {
        [paramName]: paramInitial * breakpointMultiplier,
      };

      output[muiTheme.breakpoints.up(breakpointName)] = {
        ...output[muiTheme.breakpoints.up(breakpointName)],
        ...paramOutput,
      };
    });
  });
  return output;
};

export default createMuiTheme(theme);
export { theme as themeSource };
