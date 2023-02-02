import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfigProvider, { useConfig } from '@nutui/nutui-react-native/configprovider';
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
  return (
    <ConfigProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'NutUI Demo',
              // headerLeft: (props) => (
              //   <Theme {...props} onChange={changeTheme} current={theme} />
              // ),
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
