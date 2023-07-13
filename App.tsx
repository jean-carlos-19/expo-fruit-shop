import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/global/routes";
import { Home, Product } from "@/views";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          options={{
            headerShown:false
          }}
          name="Product"
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
