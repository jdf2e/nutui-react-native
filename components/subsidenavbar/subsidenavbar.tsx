import React, {
  FunctionComponent,
  useState
} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import subsidenavbarStyles from './styles';

export type SubSideNavBarProps = {
  title: string;
  ikey: string | number;
  open: boolean;
  children: React.ReactChildren;
  onPress?: ({
    title,
    ikey,
    isShow
  }: {
    title: string;
    ikey: string | number;
    isShow: boolean;
  }) => void;
};
const defaultProps = {
  open: true
} as SubSideNavBarProps;

export const SubSideNavBar: FunctionComponent<
Partial<SubSideNavBarProps>
> = (props) => {
  const { title, ikey, children, onPress, open } = {
    ...defaultProps,
    ...props
  };
  const styles = subsidenavbarStyles();
  const [isShow, setIsShow] = useState(open);

  const clickFn: any = (e: any) => {
    e.stopPropagation();
    setIsShow(!isShow);
    onPress?.({ title, ikey, isShow });
  };

  return (
    <TouchableOpacity onPress={clickFn} >
      <View style={[styles.nutSubsidenavbar__title, styles.borderBt]}>
        <Text style={styles.nutSubsidenavbar__title__text}>{title}</Text>
        <View style={[styles.arrowIcon, isShow ? styles.arrowDown : styles.arrowUp]} />
      </View>
      <View style={[styles.nutSubsidenavbar__content, isShow ? styles.nutShow : styles.nutHide]}>{children}</View>
    </TouchableOpacity>
  );
};
