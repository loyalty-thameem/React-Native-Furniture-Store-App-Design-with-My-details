import React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import Home from './screens/Home';
import ItemDetails from './screens/ItemDetails';
// It's special for expo only and added new font style......................
import { useFonts } from 'expo-font';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

    
const Stack = createStackNavigator();

const App = () => {
// It's perfectly working  and try it later...............it's not call anything but it's working useFonts methods.......

  const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if(!loaded){
        return null;
    }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
