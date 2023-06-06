import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfigProvider, {
  useConfig,
} from '@nutui/nutui-react-native/configprovider';
import Home from './src/Home';
import { DemoList } from './demoList';
import Theme from './components/Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  const config = useConfig();
  const [theme, setTheme] = useState(config.theme);
  const changeTheme = (theme: any) => {
    setTheme(theme);
  };
  const componentRoutes: any = {};
  DemoList.forEach((item) => {
    componentRoutes[item.title] = {
      path: item.title.toLocaleLowerCase(),
    };
  });
  const linking = {
    prefixes: ['https://nutui.jd.com', 'nutui://'],
    config: {
      screens: {
        Home: '/',
        ...componentRoutes,
      },
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              headerTitle: '',
            }}
          />

          {DemoList.map((item) => (
            <Stack.Screen
              key={item.title}
              name={item.title}
              component={item.demo}
              options={{ title: `${item.title} ${item.description}` }}
            />
          ))}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ConfigProvider>
  );
}
