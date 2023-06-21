import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette:{
        primary: {
            main: "#278e9b"
        },
        secondary: {
                main: "#029zca9"
        }
    },
    typography:{
        h1:{
            fontSize:"3rem",
            fontWeight:600
        },
        h2:{
            fontSize:"1.75rem",
            fontWeight:600
        }
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>
)
