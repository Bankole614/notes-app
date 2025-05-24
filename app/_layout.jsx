import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
  screenOptions={{
    headerStyle: {backgroundColor: '#ff8c00'},
    headerTintColor: '#fff',
    headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
    contentStyle: {
      paddingHorizontal: 10,
      paddingTop: 10,
      backgroundColor: '#fff'
    }
  }}>
    <Stack.Screen name="index" options={{title: 'Home'}} />
  </Stack>;
}


export default RootLayout;
