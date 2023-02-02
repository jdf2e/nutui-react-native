import { View, TouchableHighlight } from 'react-native';

import { Button, Icon, Dialog } from '@nutui/nutui-react-native';

const ThemePanel = (props: any) => {
  return <View>Theme</View>;
};

const Theme = (props: any) => {
  const { current, onChange } = props;
  return (
    <TouchableHighlight
      onPress={() =>
        Dialog.alert(
          '动态主题配置',
          <ThemePanel changeTheme={onChange} currentTheme={current} />
        )
      }
      style={{
        padding: 10
      }}
    >
      <Icon name="setting" />
    </TouchableHighlight>
  );
};

export default Theme;
