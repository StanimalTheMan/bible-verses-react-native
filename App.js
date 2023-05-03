import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TopicsScreen from "./screens/TopicsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Topics" component={TopicsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
