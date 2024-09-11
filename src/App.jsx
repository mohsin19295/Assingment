import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './components/Auth/Login';
import Dashboard from './pages/Dashboard';
import { MantineProvider, Container, Button } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css';
import CompanyList from './components/Company/CompanyList';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)

  return (
    // <MantineProvider defaultColorScheme='dark'>
    //   <Container>
    //     <Button>Hello Mantine!</Button>
    //   </Container>
    // </MantineProvider>
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route path="/" element={<Login />} />
        ) : (
          <>
            <Route path="/companies" element={<CompanyList />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App