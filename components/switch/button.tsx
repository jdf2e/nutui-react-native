import React from 'react';
import {
  View,
  TouchableHighlight,
  TouchableHighlightProps
} from 'react-native';

interface ButtonProps extends TouchableHighlightProps {
  disabled: true | false;
  children: React.ReactNode;
}

export default ({
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  if (disabled) {
    return (
      <View>
        {children}
      </View>
    );
  }

  return (
    <TouchableHighlight
      underlayColor={null}
      activeOpacity={1}
      {...props}
    >
      {children}
    </TouchableHighlight>
  );
};
