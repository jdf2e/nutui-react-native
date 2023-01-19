import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useConfig } from '../configprovider';
import sidenavbaritemStyles from './styles';

export type SideNavBarItemProps = {
  title: string;
  ikey: string | number;
  onPress?: ({ title, ikey }: { title: string; ikey: string | number }) => void;
};
const defaultProps = {
  title: '',
  ikey: ''
} as SideNavBarItemProps;

export const SideNavBarItem: FunctionComponent<
Partial<SideNavBarItemProps>
> = (
  props
) => {
  const { title, ikey, onPress } = {
    ...defaultProps,
    ...props
  };
  const { theme } = useConfig();
  const styles = sidenavbaritemStyles(theme);

  const clickFn: any = (e: any) => {
    e.stopPropagation();
    onPress?.({ title, ikey });
  };

  return (
    <TouchableOpacity
      style={[styles.nutsubsidenavbar__item, styles.borderBt]}
      onPress={clickFn}
    >
      <Text style={styles.nutsubsidenavbar__item__text}>{title}</Text>
    </TouchableOpacity>
  );
};
