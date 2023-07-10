import React from "react";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: React.CSSProperties['color'];
      };
    }

    interface PaletteOptions {
        nutral: {
            main: React.CSSProperties['color'];
        }
    }

    interface Palette {
        nutral: {
            main: string;
        }
    }
    
  }  