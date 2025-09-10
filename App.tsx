import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './screens/DashboardScreen';
import ManualEntryScreen from './screens/ManualEntryScreen';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="ManualEntry" component={ManualEntryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
