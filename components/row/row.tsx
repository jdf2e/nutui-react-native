import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';

type EventType = 'row' | 'col';
export interface RowProps {
  type: string;
  justify: string;
  align: string;
  wrap: string;
  gutter: string | number;
  onClick: (e: any, type: EventType) => void;
}
const defaultProps = {
  type: '',
  justify: 'start',
  align: 'flex-start',
  wrap: 'nowrap',
  gutter: '0',
  onClick: () => {},
} as RowProps;
export const Row: FunctionComponent<
  Partial<RowProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { children, type, justify, align, wrap, gutter, onClick } = {
    ...defaultProps,
    ...props,
  };

  const getContainerStyle = () => {
    let styles: any = {};
    switch (justify) {
      case 'start':
        styles = {
          justifyContent: 'flex-start',
        };
        break;
      case 'end':
        styles = {
          justifyContent: 'flex-end',
        };
        break;
      case 'center':
      case 'space-around':
      case 'space-between':
      case 'space-evenly':
        styles = {
          justifyContent: justify,
        };
        break;
      default:
        styles = {
          justifyContent: justify,
        };
        break;
    }
    return styles;
  };

  const getWrapStyle = () => {
    let styles: any = {};
    switch (wrap) {
      case 'nowrap':
      case 'wrap':
        styles = {
          flexWrap: wrap,
        };
        break;
      default:
        styles = {
          flexWrap: 'nowrap',
        };
        break;
    }
    return styles;
  };

  let cloneChildren: any = children;
  if (
    Array.isArray(cloneChildren) ||
    Object.prototype.toString.call(cloneChildren) === '[object Object]'
  ) {
    if (Array.isArray(cloneChildren)) {
      if (gutter) {
        let returnView = [];
        for (let i = 0; i < cloneChildren.length; i++) {
          if (i === cloneChildren.length - 1) {
            returnView.push(
              React.cloneElement(cloneChildren[i], {
                key: i,
                gutter: gutter,
              })
            );
          } else {
            returnView.push(
              React.cloneElement(cloneChildren[i], {
                key: i,
                gutter: gutter,
              })
            );
            returnView.push(<View style={{ width: parseInt(gutter) }} />);
          }
        }
        if (wrap === 'reverse') {
          cloneChildren = returnView.reverse();
        } else {
          cloneChildren = returnView;
        }
      } else {
        cloneChildren = cloneChildren.map((o: any, i: any) => {
          return React.cloneElement(o, {
            key: i,
            gutter: gutter,
          });
        });
      }
    } else {
      cloneChildren = React.cloneElement(cloneChildren, {
        gutter: gutter,
      });
    }
  }
  if (type === 'flex') {
    return (
      <TouchableOpacity
        style={[
          {
            width: '100%',
            flexDirection: 'row',
            alignItems: align,
          },
          getContainerStyle(),
          getWrapStyle(),
        ]}
        onPress={(e: any) => {
          onClick && onClick(e, 'row');
        }}
      >
        {cloneChildren}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={[
          {
            width: '100%',
            flexDirection: 'row',
          },
          getWrapStyle(),
        ]}
        onPress={(e: any) => {
          onClick && onClick(e, 'row');
        }}
      >
        {cloneChildren}
      </TouchableOpacity>
    );
  }
};

Row.defaultProps = defaultProps;
Row.displayName = 'NutRow';
