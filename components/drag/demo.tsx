import React from 'react';
import { View, Text } from 'react-native';
import { Drag } from './drag';
import { useTranslate, DiviceHeight } from '../utils';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  basic: string;
  dragBasic: string;
  direction: string;
  directionX: string;
  directionY: string;
  attract: string;
  attractText: string;
  limitBoundaries: string;
}
const DragDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      dragBasic: '触摸移动',
      direction: '限制拖拽方向',
      directionX: '只能X轴拖动',
      directionY: '只能Y轴拖动',
      attract: '自动吸边',
      attractText: '按钮',
      limitBoundaries: '限制拖拽边界',
    },
    'zh-TW': {
      basic: '基本用法',
      dragBasic: '觸摸移動',
      direction: '限製拖拽方向',
      directionX: '只能X軸拖動',
      directionY: '只能Y軸拖動',
      attract: '自動吸邊',
      attractText: '按鈕',
      limitBoundaries: '限製拖拽邊界',
    },
    'en-US': {
      basic: 'Basic Usage',
      dragBasic: 'Button',
      direction: 'Limit Direction',
      directionX: 'X axis',
      directionY: 'Y axis',
      attract: 'Attract',
      attractText: 'Button',
      limitBoundaries: 'Limit Boundaries',
    },
  });
  const bottom = () => {
    return DiviceHeight - 100;
  };
  const btnStyle = {
    borderRadius: 18,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#fff',
    lineHeight: 36,
    backgroundColor: '#fa2c19',
  };

  const cardStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <DemoPage>
      <DemoCard title={translated.basic} {...cardStyle}>
        <View style={{ width: '100%', height: 50 }}>
          <Drag style={{ top: 0, left: 0 }}>
            <Text style={btnStyle}>{translated.dragBasic}</Text>
          </Drag>
        </View>
      </DemoCard>
      <DemoCard title={translated.direction} {...cardStyle}>
        <View style={{ width: '100%', height: 100 }}>
          <Drag direction="x" style={{ top: 0, left: 0 }}>
            <Text style={btnStyle}> {translated.directionX}</Text>
          </Drag>
          <Drag direction="y" style={{ top: 0, right: 50 }}>
            <Text style={btnStyle}> {translated.directionY}</Text>
          </Drag>
        </View>
      </DemoCard>
      <DemoCard title={translated.attract} {...cardStyle}>
        <View style={{ width: '100%', height: 100 }}>
          <Drag direction="x" attract style={{ left: 0 }}>
            <Text style={btnStyle}>{translated.attractText}</Text>
          </Drag>
        </View>
      </DemoCard>
      <DemoCard title={translated.limitBoundaries} {...cardStyle}>
        <View style={{ width: '100%', height: 100, backgroundColor: '#fff' }}>
          <Drag
            boundary={{ top: 0, left: 0, bottom: bottom(), right: 60 }}
            style={{ left: 50 }}
          >
            <Text style={btnStyle}>{translated.limitBoundaries}</Text>
          </Drag>
        </View>
      </DemoCard>
    </DemoPage>
  );
};

export default DragDemo;
