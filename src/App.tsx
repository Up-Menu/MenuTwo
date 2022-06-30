import { useEffect } from "react"
import { useRoutes } from 'react-router-dom'
import routes from 'src/router/router'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { CssBaseline } from '@mui/material'
import ThemeProvider from './theme/ThemeProvider'
import './assets/styles/css/costume.css'
import { useTypedSelector } from './store'
import NetworkChecker from './components/modules/NetworkChecker'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import AutoLogout from "./components/modules/auth/AutoLogout"



function getFaviconEl () {
  return document.getElementById( "favicon" )! as HTMLLinkElement
}

function App () {
  const logData = useTypedSelector( state => state )
  const router: any = routes( logData.user )
  const content = useRoutes( router )
  const isOnline = NetworkChecker()

  useEffect( () => {
    if ( isOnline ) {
      const favicon = getFaviconEl() // Accessing favicon element
      favicon.href = "./favicon.ico"
      toast.success( '!به اینترنت متصل هستید' )
    }
    else {
      const favicon = getFaviconEl() // Accessing favicon element
      favicon.href = "Error.svg"
      toast.error( '!دسترسی اینترنت شما قطع شده است' )
    }
  }, [ isOnline ] )

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={ AdapterDateFns }>
        <Toaster />
        <CssBaseline />
        <AutoLogout>
          { content }
        </AutoLogout>
      </LocalizationProvider>
    </ThemeProvider>
  )
}
export default App
