// React
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from '@pages/App'

// Styles
import '@pages/Main.scss'

// Root element
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Alias Vite => import.meta.env.MODE === 'development' - Vite detect automatically the environment
if (import.meta.env.DEV) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  root.render(<App />)
}
