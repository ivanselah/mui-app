import '@mui/material/styles/createPalette';
import '@mui/material/SvgIcon';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    brown: PaletteColor;
  }
  interface PaletteOptions {
    brown: PaletteColorOptions;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    brown: true;
  }
}
