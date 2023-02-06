import React, { useState } from 'react'
import { useTranslate } from '../utils';
import { View, Text } from 'react-native';
import Button from '../button';
import Overlay from '.';
import Cell from '../cell';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  '84aa6bce': string
  '2a9e4928': string
  abbf9359: string
  ec0d7acf: string
  ce1e18a2: string
}
const OverlayDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      '2a9e4928': '显示遮罩层',
      abbf9359: '遮罩样式',
      ec0d7acf: '嵌套内容',
      ce1e18a2: '这里是正文',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      '2a9e4928': '顯示遮罩層',
      abbf9359: '遮罩樣式',
      ec0d7acf: '嵌套內容',
      ce1e18a2: '這裡是正文',
    },
    'en-US': {
      '84aa6bce': 'Basic usage',
      '2a9e4928': 'show mask layer',
      abbf9359: 'mask style',
      ec0d7acf: 'nested content',
      ce1e18a2: 'here is the text',
    },
  })

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)

  const handleToggleShow = () => {
   
    setVisible(true)
  }
  const handleToggleShow2 = () => {
    setVisible2(true)
  }
  const handleToggleShow3 = () => {
    setVisible3(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  const onClose2 = () => {
    setVisible2(false)
  }
  const onClose3 = () => {
    setVisible3(false)
  }

  return (
    <DemoPage>
        <DemoCard title={translated['84aa6bce']} flexDirection="column" padding={0}>
        <Cell>
          <Button type="primary" onPress={handleToggleShow}>
            {translated['2a9e4928']}
          </Button>
          <Overlay visible={visible} onPress={onClose} />
        </Cell>
      </DemoCard>

      <DemoCard title={translated['abbf9359']} flexDirection="column" padding={0}>
      <Cell>
          <Button type="primary" onPress={handleToggleShow2}>
            {translated['2a9e4928']}
          </Button>
          <Overlay
            visible={visible2}
            onPress={onClose2}
            overlayStyle={{
              backgroundColor: '#38333333',
            }}
          />
        </Cell>
      </DemoCard>

      <DemoCard title={translated['ec0d7acf']} flexDirection="column" padding={0}>
      <Cell>
          <Button type="success" onPress={handleToggleShow3}>
            {translated.ec0d7acf}
          </Button>
          <Overlay visible={visible3} onPress={onClose3} overlayStyle={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 150, height: 150, borderRadius: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }} >
                <Text style={{ color: 'red' }}>这里是正文</Text>
            </View>
          </Overlay>
        </Cell>
        </DemoCard>
    </DemoPage>
  )
}

export default OverlayDemo
