import React, { FunctionComponent, ReactNode } from 'react';
import { View, Text } from 'react-native';

import { useConfig } from '../configprovider';
import cellGroupStyles from './styles';

export interface CellGroupProps {
  title: ReactNode; // 分组标题
  desc: ReactNode; // 分组描述
  titleSlot: ReactNode;
  descSlot: ReactNode;
  children?: ReactNode;
}
const defaultProps = {
  title: '',
  desc: '',
  titleSlot: null,
  descSlot: null,
} as CellGroupProps;

export const CellGroup: FunctionComponent<Partial<CellGroupProps>> = (
  props
) => {
  const { children, title, desc, titleSlot, descSlot } = {
    ...defaultProps,
    ...props,
  };

  const { theme } = useConfig();

  const styles = cellGroupStyles(theme);

  let cloneChildren: any = children;

  if (
    Array.isArray(cloneChildren) ||
    Object.prototype.toString.call(cloneChildren) === '[object Object]'
  ) {
    if (Array.isArray(cloneChildren)) {
      cloneChildren = cloneChildren.map((o: any, i: any) => {
        return React.cloneElement(o, {
          key: i,
          cellGroup: true,
          isLast: i + 1 == cloneChildren.length,
        });
      });
    } else {
      cloneChildren = React.cloneElement(cloneChildren, {
        cellGroup: true,
        isLast: true,
      });
    }
  }

  const wrapStyle = [styles.container];

  return (
    <View style={wrapStyle}>
      {titleSlot || (
        <>
          {title ? (
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
          ) : null}
        </>
      )}

      {descSlot || (
        <>
          {desc ? (
            <View style={styles.descContainer}>
              <Text style={styles.desc}>{desc}</Text>
            </View>
          ) : null}
        </>
      )}

      <View style={styles.wrap}>{cloneChildren}</View>
    </View>
  );
};

CellGroup.defaultProps = defaultProps;
CellGroup.displayName = 'NutCellGroup';
