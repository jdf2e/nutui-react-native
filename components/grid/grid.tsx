import React, { CSSProperties, FunctionComponent } from 'react';
import { View } from 'react-native';
import { useConfig } from '../configprovider';
import gridStyles from './styles';

export type GridDirection = 'horizontal' | 'vertical';

export interface GridProps {
  columnNum: string | number;
  border: boolean;
  gutter: string | number;
  center: boolean;
  square: boolean;
  reverse: boolean;
  direction: GridDirection;
  className?: string;
  iconSize?: string | number;
  iconColor?: string;
  style?: CSSProperties;
  onPress: () => void;
}

const defaultProps = {
  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
  iconSize: 28,
  iconColor: '',
} as GridProps;

export const Grid: FunctionComponent<
  Partial<GridProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    columnNum,
    border,
    gutter,
    center,
    square,
    reverse,
    direction,
    style,
    iconSize,
    iconColor,
    className,
    ...rest
  } = { ...defaultProps, ...props };

  const { theme } = useConfig();
  const mStyles = gridStyles(theme);

  const childrenDom = React.Children.toArray(children);

  const pxCheck = (value: string | number): number => {
    let getValue: any = value;
    if (Number.isNaN(Number(value)) || typeof value === 'string') {
      getValue = parseInt(String(value));
    }
    if (!getValue || getValue == '') {
      getValue = 0;
    }

    return getValue;
  };

  const rootStyle = () => {
    let styleSelf: CSSProperties = {};
    if (style) {
      styleSelf = style;
    }
    if (gutter) {
      styleSelf.paddingLeft = pxCheck(gutter);
    }

    return styleSelf;
  };

  return (
    <View style={[mStyles.nut_grid_container, rootStyle()]}>
      {childrenDom.map((item: any, idex: number) => {
        return React.cloneElement(item, {
          index: idex,
          columnNum,
          center,
          border,
          gutter,
          square,
          reverse,
          direction,
          parentIconSize: iconSize,
          parentIconColor: iconColor,
        });
      })}
    </View>
  );
};

Grid.defaultProps = defaultProps;
Grid.displayName = 'NutGrid';
