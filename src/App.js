import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './Pages/Blogs';
import Create from './Pages/Create'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { typography } from '@mui/system';

const theme = createTheme(
  {
    palette:{
      primary :{
        main:'#fefefe'
      }
    },
    typography:{
     fontFamily:'Oswald'
    }
  })
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Blogs />}>
         </Route>
        <Route path="/create" element={<Create />}>
          </Route>
        </Routes>
        </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;