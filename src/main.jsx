import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeTheme } from '@fluffylabs/shared-ui'
import '@fluffylabs/shared-ui/theme.css'
import '@fluffylabs/shared-ui/style.css'
import './styles.css'
import App from './App'

initializeTheme()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
