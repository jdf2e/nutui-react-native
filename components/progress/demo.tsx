import React, { useState } from 'react'
import { useTranslate } from '../utils';
import Cell from '../cell';
import Icon from '../icon';
import Progress from '.';
import Button from '../button';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { View } from 'react-native';
import { DiviceWidth } from '../utils';

interface T {
  basic: string
  customStyle: string
  noShowPercentage: string
  showPercentage: string
  showInsidePercentage: string
  customContent: string
  customSize: string
  statusDisplay: string
  dynamicChange: string
  reduce: string
  add: string
}

const ProgressDemo = () => {

  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '线形进度条-设置颜色高度',
      noShowPercentage: '百分比不显示',
      showPercentage: '百分比外显',
      showInsidePercentage: '百分比内显',
      customContent: '百分比内显自定义',
      customSize: '自定义尺寸',
      statusDisplay: '状态显示',
      dynamicChange: '动态改变',
      reduce: '减少',
      add: '增加',
    },
    'zh-TW': {
      basic: '基礎用法',
      customStyle: '線形進度條-設置顏色高度',
      noShowPercentage: '百分比不顯示',
      showPercentage: '百分比外顯',
      showInsidePercentage: '百分比內顯',
      customContent: '百分比內顯自定義',
      customSize: '自定義尺寸',
      statusDisplay: '狀態顯示',
      dynamicChange: '動態改變',
      reduce: '減少',
      add: '增加',
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Don’t Show Percentage',
      showPercentage: 'Percentage displayed outside',
      showInsidePercentage: 'Percentage displayed inside',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      reduce: 'reduce',
      add: 'add',
    },
  })

  const [value, setValue] = useState(0)

  return (
      <DemoPage >
        <DemoCard title={translated.basic}>
            <Progress percentage={30} />
        </DemoCard>

        <DemoCard title={translated.customStyle}>
            <Progress
                percentage={30}
                strokeWidth="20"
                textColor='red'
              />
        </DemoCard>

        <DemoCard title={translated.noShowPercentage}>
              <Progress percentage={50} showText={false} style={{}}/>
        </DemoCard>

        <DemoCard title={translated.showPercentage}>
              <Progress percentage={30}/>
        </DemoCard>

        <DemoCard title={translated.showInsidePercentage}>
              <Progress percentage={60} textInside />
        </DemoCard>

        <DemoCard title={translated.showInsidePercentage}>
              <Progress percentage={60} textInside />
        </DemoCard>

        <DemoCard title={translated.customContent}>
                  <Progress percentage={60}
                        textInside
                        textColor='#fff'
                        textType='icon'
                        iconSize={'30'}
                        iconName={'https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png'}
                    />
        </DemoCard>

        <DemoCard title={translated.customSize}>
              <View style={{width:DiviceWidth-70}}>
                  <Progress percentage={30} size="small" textInside />
              </View>
              <View style={{width:DiviceWidth-70}}>
                  <Progress percentage={30} size="base" textInside />
              </View>
              <View style={{width:DiviceWidth-70}}>
                  <Progress percentage={70} size="large" textInside />
              </View>
        </DemoCard>

        <DemoCard title={translated.statusDisplay}>
                  <View style={{width:DiviceWidth-70}}>
                    <Progress 
                      percentage={30}
                      strokeColor={['#05ebd0', '#2f7bfc']}
                    />
                  </View>
                  <View style={{width:DiviceWidth-70}}>
                    <Progress
                        percentage={100}
                        strokeColor={['#a6ed59', '#2c9628']}
                      >
                        <Icon
                            size={30}
                            name='https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png'
                        />
                    </Progress>
                  </View>
        </DemoCard>

        <DemoCard title={translated.dynamicChange}>
              <Progress percentage={value} />
        </DemoCard>

        <DemoCard title={''} >
        <Button
            type="default"
            style={{ margin: 8 }}
            // eslint-disable-next-line consistent-return
            onPress={() => {
              let num = value
              if (value <= 0) {
                return false
              }
              num -= 10
              setValue(num)
            }}
          >
            {translated.reduce}
          </Button>
          <Button
            type="primary"
            style={{ margin: 8 }}
            // eslint-disable-next-line consistent-return
            onPress={() => {
              let num = value
              if (value >= 100) {
                return false
              }
              num += 10
              setValue(num)
            }}
          >
            {translated.add}
          </Button>
        </DemoCard>
      </DemoPage>
  )
}

export default ProgressDemo
