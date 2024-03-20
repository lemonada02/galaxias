import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NewGame from './screens/newGame';
import Home from './screens/home';
import CreateGame from './screens/createGame';
import ContinueGame from './screens/continueGame';
import Tutorial from './screens/tutorial';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor: "#333",
        headerTitleStyle: { fontWeight: "bold", fontSize: 22},
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#22d3ee",
        },
      }}>
        <Stack.Screen name={"Galaxias".toUpperCase()} component={Home} />
        <Stack.Screen name={"Nuevo juego".toUpperCase()} component={NewGame} />
        <Stack.Screen name={"Cargar juego".toUpperCase()} component={ContinueGame} />
        <Stack.Screen name={"Crear juego".toUpperCase()} component={CreateGame} />
        <Stack.Screen name={"Tutorial".toUpperCase()} component={Tutorial} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

