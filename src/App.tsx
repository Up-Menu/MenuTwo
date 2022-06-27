import { useRoutes } from 'react-router-dom'
import routes from 'src/router'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import { CssBaseline } from '@mui/material'
import ThemeProvider from './theme/ThemeProvider'
import './assets/styles/css/costume.css'
import { useTypedSelector } from './store'


function App () {
  const logData = useTypedSelector( state => state )
  const router: any = routes( logData.user )
  const content = useRoutes( router )




  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={ AdapterDateFns }>
        <CssBaseline />
        { content }
      </LocalizationProvider>
    </ThemeProvider>
  )
}
export default App
