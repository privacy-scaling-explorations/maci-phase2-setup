import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  }
})

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);

