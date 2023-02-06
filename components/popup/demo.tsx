import React, { useState } from 'react'
import { useTranslate } from '../utils';
import Cell  from '../cell'
import Popup from '.'
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page'
import { View, Text } from 'react-native';

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  '7db1a8b2': string
  a52bef0c: string
  d04fcbda: string
  '0aaad620': string
}

const PopupDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础类型',
      c38a08ef: '展示弹出层',
      b840c88f: '正文',
      a74a1fd4: '弹出位置',
      '8dab2f66': '顶部弹出',
      cfbdc781: '底部弹出',
      c3a3a1d2: '左侧弹出',
      e51e4582: '右侧弹出',
      '7db1a8b2': '关闭图标',
      a52bef0c: '图标位置',
      d04fcbda: '自定义图标',
      '0aaad620': '圆角弹框'
    },
    'zh-TW': {
      ce5c5446: '基礎類型',
      c38a08ef: '展示彈出層',
      b840c88f: '正文',
      a74a1fd4: '彈出位置',
      '8dab2f66': '頂部彈出',
      cfbdc781: '底部彈出',
      c3a3a1d2: '左側彈出',
      e51e4582: '右側彈出',
      '7db1a8b2': '關閉圖標',
      a52bef0c: '圖標位置',
      d04fcbda: '自定義圖標',
      '0aaad620': '圓角彈框'
    },
    'en-US': {
      ce5c5446: 'base type',
      c38a08ef: 'Show popup',
      b840c88f: 'text',
      a74a1fd4: 'popup location',
      '8dab2f66': 'top pop',
      cfbdc781: 'bottom pop',
      c3a3a1d2: 'pop up left',
      e51e4582: 'pop up right',
      '7db1a8b2': 'close icon',
      a52bef0c: 'Icon position',
      d04fcbda: 'custom icon',
      '0aaad620': 'Rounded popup'
    },
  })

  const [showBasic, setShowBasic] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [showBottom, setShowBottom] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [showIconPosition, setShowIconPosition] = useState(false)
  const [showIconDefine, setShowIconDefine] = useState(false)
  const [showBottomRound, setShowBottomRound] = useState(false)
  const [showMountNode, setShowMountNode] = useState(false)
  const [showMutiple, setShowMutiple] = useState(false)
  const [showMutipleInner, setShowMutipleInner] = useState(false)

  return (
    <DemoPage>
       <DemoCard title={translated.ce5c5446} flexDirection="column" padding={0}>
       <Cell
          title={translated.c38a08ef}
          isLink
          onClick={() => {
            setShowBasic(true)
          }}
        />
      </DemoCard>

      <Popup
          closeOnClickOverlay
          visible={showBasic}
          style={{
            backgroundColor:'#fff'
          }}
          onClose={() => {
            setShowBasic(false)
          }}
          onClickOverlay={ () => {  setShowBasic(false) } }
        >
          <View style={{ width: 120, height: 80, justifyContent: 'center', alignItems: 'center' }} >
               <Text>{translated.b840c88f}</Text>
          </View>
        </Popup>


      <DemoCard title={translated.a74a1fd4} flexDirection="column" padding={0}>
          
      <Cell
          title={translated['8dab2f66']}
          isLink
          onClick={() => {
            setShowTop(true)
          }}
        />
       
        <Cell
          title={translated.cfbdc781}
          isLink
          onClick={() => {
            setShowBottom(true)
          }}
        />

      
      <Cell
          title={translated.c3a3a1d2}
          isLink
          onClick={() => {
            setShowLeft(true)
          }}
        />

        <Cell
          title={translated.e51e4582}
          isLink
          onClick={() => {
            setShowRight(true)
          }}
        />
      </DemoCard>
      <Popup
          closeOnClickOverlay
          visible={showTop}
          style={{ width: '100%', height: '30%', backgroundColor: '#fff' }}
          position="top"
          onClose={() => {
            setShowTop(false)
          }}
          onClickOverlay={ () => {  setShowTop(false) } }
        />

        <Popup
          closeOnClickOverlay
          visible={showBottom}
          style={{ width: '100%', height: '30%', backgroundColor: '#fff' }}
          position="bottom"
          onClose={() => {
            setShowBottom(false)
          }}
          onClickOverlay={ () => {  setShowBottom(false) } }
        />

        <Popup
          closeOnClickOverlay
          visible={showLeft}
          style={{ width: '30%', height: '100%',backgroundColor:'#fff' }}
          position="left"
          onClose={() => {
            setShowLeft(false)
          }}
          onClickOverlay={ () => {  setShowLeft(false) } }
        />

        <Popup
          closeOnClickOverlay
          visible={showRight}
          style={{ width: '30%', height: '100%',backgroundColor:'#fff' }}
          position="right"
          onClose={() => {
            setShowRight(false)
          }}
          onClickOverlay={ () => {  setShowRight(false) } }
        />



      <DemoCard title={translated['7db1a8b2']} flexDirection="column" padding={0}>
        
        <Cell
          title={translated['7db1a8b2']}
          isLink
          onClick={() => {
            setShowIcon(true)
          }}
        />
        <Cell
          title={translated.a52bef0c}
          isLink
          onClick={() => {
            setShowIconPosition(true)
          }}
        />      
        <Cell
          title={translated.d04fcbda}
          isLink
          onClick={() => {
            setShowIconDefine(true)
          }}
        />
        </DemoCard>
        <Popup
          closeable
          closeOnClickOverlay
          visible={showIcon}
          style={{ height: '30%',width:'100%',backgroundColor:'#fff' }}
          position="bottom"
          onClose={() => {
            setShowIcon(false)
          }}
          onClickOverlay={ () => {  setShowIcon(false) } }
          onClickCloseIcon={() => { setShowIcon(false) } }
        />

        <Popup
          closeable
          closeOnClickOverlay
          visible={showIconPosition}
          style={{ height: '30%',width:'100%',backgroundColor:'#fff' }}
          closeIconPosition="top-left"
          position="bottom"
          onClose={() => {
            setShowIconPosition(false)
          }}
          onClickOverlay={ () => {  setShowIconPosition(false) } }
          onClickCloseIcon={() => { setShowIconPosition(false) } }
        />

        <Popup
          closeable
          closeOnClickOverlay
          visible={showIconDefine}
          style={{ height: '30%',width:'100%',backgroundColor:'#fff' }}
          closeIcon="heart"
          position="bottom"
          onClose={() => {
            setShowIconDefine(false)
          }}
          onClickOverlay={ () => {  setShowIconDefine(false) } }
          onClickCloseIcon={() => { setShowIconDefine(false) } }
        />



        <DemoCard title={translated['0aaad620']} flexDirection="column" padding={0}>
        <Cell
          title={translated['0aaad620']}
          isLink
          onClick={() => {
            setShowBottomRound(true)
          }}
        />

          </DemoCard>

        <Popup
          closeable
          closeOnClickOverlay
          visible={showBottomRound}
          style={{ height: '30%',width:'100%',backgroundColor:'#fff' }}
          position="bottom"
          round
          onClose={() => {
            setShowBottomRound(false)
          }}
          onClickOverlay={ () => {  setShowBottomRound(false) } }
          onClickCloseIcon={() => { setShowBottomRound(false) } }
        />
  
    </DemoPage>
  )
}

export default PopupDemo
