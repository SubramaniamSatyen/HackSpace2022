import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage'
import TabOneScreen from './screens/TabOneScreen';
import TabTwoScreen from './screens/TabTwoScreen';
import PlayerScreen from './screens/PlayerScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name = "Home" 
          component={HomePage}
          options = {{
            title: 'ReactWithMe',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'Phosphate',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}/>
        <Stack.Screen 
          name="Record" 
          component={TabOneScreen} 
          options = {{
            title: 'Record',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'Phosphate',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}/>
        <Stack.Screen 
        name="View" 
        component={TabTwoScreen}
        options = {{
          title: 'View',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Phosphate',
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen 
          name="Watch" 
          component={PlayerScreen} 
          options = {{
            title: 'Watch',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'Phosphate',
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}