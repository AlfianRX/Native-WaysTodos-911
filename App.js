import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

import Container from './Container';


export default function App() {
  return (
    <TailwindProvider>
          <Container  />
    </TailwindProvider>
  );
}

