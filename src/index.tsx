import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'
import './index.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/200.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Extend the default Chakra theme to set the font to Poppins
const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    }
})

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
)
