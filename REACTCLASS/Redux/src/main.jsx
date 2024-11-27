
import { createRoot } from 'react-dom/client'
//import './App.css'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {store} from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  
  //this is where we provide the store to the app!
    <Provider store={store}>  
      <App />
    </Provider>
  
)
