import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TopicsScreen from "./screens/TopicsScreen";
import VerseOverviewScreen from "./screens/VerseOverviewScreen";
import VerseDetailScreen from "./screens/VerseDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Topics" component={TopicsScreen} />
          <Stack.Screen name="VerseOverview" component={VerseOverviewScreen} />
          <Stack.Screen name="VerseDetail" component={VerseDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
