import { createRoot } from 'react-dom/client'
import App from './App';
import { GlobalStyle} from './GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container)

root.render(
  <>
   <GlobalStyle/>
   <Router>
    <App />
   </Router>
  </>
)

