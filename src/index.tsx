import ReactDOM from "react-dom/client"
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'
import 'nprogress/nprogress.css'
import App from 'src/App'
import { SidebarProvider } from 'src/contexts/SidebarContext'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './store'
import React from "react"


const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
)
root.render(

  <Provider store={ store }>
    <HelmetProvider>
      <SidebarProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Provider>

)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
