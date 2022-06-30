import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'

import 'nprogress/nprogress.css'
import App from 'src/App'
import { SidebarProvider } from 'src/contexts/SidebarContext'
import * as serviceWorker from 'src/serviceWorker'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <Provider store={ store }>
    <HelmetProvider>
      <SidebarProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById( 'root' )
)

serviceWorker.register()
