import React, { FunctionComponent } from 'react';
import Icon from '../icon/index';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { IComponent, ComponentDefaults } from '../utils/typings';
import deviceWidth from '../utils/deviceWidth';
import statusBarHeight from '../utils/statusBarHeight';
import pt from '../utils/pt';

export interface NavBarProps extends IComponent {
  leftShow: boolean;
  title: string;
  titIcon: string;
  leftText: string;
  desc: string;
  className: string;
  fixed: boolean;
  safeAreaInsetTop: boolean;
  border: boolean;
  placeholder: boolean;
  zIndex: number | string;
  style: any;
  onClickTitle: (e: any) => void;
  onClickIcon: (e: any) => void;
  onClickBack: (e: any) => void;
  onClickRight: (e: any) => void;
  children?: React.ReactNode;
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  desc: '',
  leftShow: true,
  titIcon: '',
  className: '',
  leftText: '',
  fixed: false,
  safeAreaInsetTop: false,
  border: false,
  placeholder: false,
  zIndex: 10,
  style: {},
  onClickTitle: () => {},
  onClickIcon: () => {},
  onClickBack: () => {},
  onClickRight: () => {},
} as NavBarProps;
export const NavBar: FunctionComponent<Partial<NavBarProps>> = (props) => {
  const {
    desc,
    title,
    titIcon,
    leftShow,
    className,
    style,
    leftText,
    fixed,
    safeAreaInsetTop,
    border,
    placeholder,
    zIndex,
    onClickTitle,
    onClickIcon,
    onClickBack,
    onClickRight,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  };

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children];

  const slot = children.reduce((slot: any, item: React.ReactElement) => {
    const data = slot;
    if (item && item.props) {
      data[item.props.slot] = item;
    }
    return data;
  }, {});

  const customStyles = () => {
    return {
      ...style,
      zIndex,
    };
  };

  const renderLeft = () => {
    return (
      <TouchableOpacity style={mStyles.mLeft} onPress={(e) => onClickBack(e)}>
        {leftShow && (
          <Icon
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            name="left"
            color="#979797"
            size={pt(32)}
          />
        )}
        {leftText ? (
          <View style={mStyles.marL10}>
            <Text>{leftText}</Text>
          </View>
        ) : null}
        {slot.left}
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View style={mStyles.content}>
        {title ? (
          <TouchableOpacity onPress={(e) => onClickTitle(e)}>
            <Text> {title}</Text>
          </TouchableOpacity>
        ) : null}
        {titIcon ? (
          <TouchableOpacity
            onPress={(e) => onClickIcon(e)}
            style={mStyles.marL10}
          >
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={titIcon}
            />
          </TouchableOpacity>
        ) : null}
        {slot.content}
      </View>
    );
  };

  const renderRight = () => {
    return (
      <TouchableOpacity
        style={mStyles.mRright}
        onPress={(e) => onClickRight(e)}
      >
        {desc ? (
          <View style={{ marginRight: 10 }}>
            <Text>{desc}</Text>
          </View>
        ) : null}
        {slot.right}
      </TouchableOpacity>
    );
  };

  const renderWrapper = () => {
    return (
      <View
        style={[
          mStyles.wrapper,
          {
            width: deviceWidth,
            borderBottomWidth: border ? 1 : 0,
            zIndex,
          },
          style,
        ]}
      >
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </View>
    );
  };
  return (
    <>
      {safeAreaInsetTop ? (
        <View style={{ paddingTop: statusBarHeight }}>{renderWrapper()}</View>
      ) : (
        renderWrapper()
      )}
    </>
  );
};

const mStyles = StyleSheet.create({
  wrapper: {
    height: pt(100),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#f2f2f2',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  mRright: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  mLeft: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
    top: 0,
  },
  marL10: {
    marginLeft: pt(10),
  },
});

NavBar.defaultProps = defaultProps;
NavBar.displayName = 'NutNavBar';
