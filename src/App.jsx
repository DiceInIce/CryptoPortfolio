import React from 'react';
import { CryptoContextProvider } from './context/crypto-context';
import AppLayout from './components/layout/AppLayout';

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#001529',
};

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout/>
    </CryptoContextProvider>   
  )
}