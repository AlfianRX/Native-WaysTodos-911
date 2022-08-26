import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';

import Container from './Container';


export default function App() {
  return (
    <TailwindProvider>
          <Container  />
    </TailwindProvider>
  );
}

