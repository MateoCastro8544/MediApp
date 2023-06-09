import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './src/screens/auth/LoginScreen';
// import RegisterScreen from './src/screens/auth/RegisterScreen';
import { AuthNavigation } from './src/navigation/auth/AuthNavigation';
import { AuthProvider } from './src/context/authContext';


const AppState = ({ children }: any) => {

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AuthNavigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
