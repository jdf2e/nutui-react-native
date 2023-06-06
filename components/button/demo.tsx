import React, { useState } from 'react'
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page'
import useTranslate from '../hooks/useTranslate'
import { Button } from './button'
import pt from '../utils/pt'

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
  '60a53514': string
  b8a453e3: string
  '248be9e1': string
  ea3d02f2: string
  c9e6df49: string
  '781b07fd': string
  '1076d771': string
  '6ab47cd2': string
}

const ButtonDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '按钮类型',
      c38a08ef: '主要按钮',
      b840c88f: '信息按钮',
      a74a1fd4: '默认按钮',
      '8dab2f66': '危险按钮',
      cfbdc781: '警告按钮',
      c3a3a1d2: '成功按钮',
      e51e4582: '朴素按钮',
      '7db1a8b2': '禁用状态',
      a52bef0c: '加载状态',
      d04fcbda: '加载中',
      '0aaad620': '按钮尺寸',
      '60a53514': '收藏',
      b8a453e3: '大号按钮',
      '248be9e1': '普通按钮',
      ea3d02f2: '小型按钮',
      c9e6df49: '块级元素',
      '781b07fd': '自定义颜色',
      '1076d771': '单色按钮',
      '6ab47cd2': '渐变按钮',
    },
    'zh-TW': {
      ce5c5446: '按鈕類型',
      c38a08ef: '主要按鈕',
      b840c88f: '資訊按鈕',
      a74a1fd4: '默認按鈕',
      '8dab2f66': '危險按鈕',
      cfbdc781: '警告按鈕',
      c3a3a1d2: '成功按鈕',
      e51e4582: '樸素按鈕',
      '7db1a8b2': '禁用狀態',
      a52bef0c: '載入狀態',
      d04fcbda: '載入中',
      '0aaad620': '按鈕尺寸',
      '60a53514': '收藏',
      b8a453e3: '大號按鈕',
      '248be9e1': '普通按鈕',
      ea3d02f2: '小型按鈕',
      c9e6df49: '塊級元素',
      '781b07fd': '自定義顏色',
      '1076d771': '單色按鈕',
      '6ab47cd2': '漸變按鈕',
    },
    'en-US': {
      ce5c5446: 'Button Type',
      c38a08ef: 'Main button',
      b840c88f: 'Info Button',
      a74a1fd4: 'Default Button',
      '8dab2f66': 'Danger Button',
      cfbdc781: 'Warning button',
      c3a3a1d2: 'Success Button',
      e51e4582: 'Naive button',
      '7db1a8b2': 'Disabled State',
      a52bef0c: 'Load State',
      d04fcbda: 'Loading',
      '0aaad620': 'Button size',
      '60a53514': 'Favorite',
      b8a453e3: 'Large button',
      '248be9e1': 'Normal Button',
      ea3d02f2: 'Mini Button',
      c9e6df49: 'Block-level elements',
      '781b07fd': 'Custom Colors',
      '1076d771': 'Monochrome button',
      '6ab47cd2': 'Gradient button',
    },
  })

  const [loading, setLoading] = useState(false)
  return (
    <DemoPage>
        <DemoCard
          title="按钮类型"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
          <Button>默认字体</Button>
          <Button type="primary">主要字体</Button>
          <Button type="info">信息字体</Button>
          <Button type="danger">危险字体</Button>
          <Button type="warning">警告字体</Button>
          <Button type="success">成功字体</Button>
        </DemoCard>

        <DemoCard
          title="朴素类型"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
          <Button plain type="default">
            默认字体
          </Button>
          <Button plain type="primary">
            主要字体
          </Button>
          <Button plain type="info">
            信息字体
          </Button>
          <Button plain type="danger">
            危险字体
          </Button>
          <Button plain type="warning">
            警告字体
          </Button>
          <Button plain type="success">
            成功字体
          </Button>
        </DemoCard>

        <DemoCard
          title="禁用状态"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
          <Button disabled type="default">
            默认字体
          </Button>
          <Button disabled type="primary">
            主要字体
          </Button>
          <Button disabled type="info">
            信息字体
          </Button>
          <Button disabled type="danger">
            危险字体
          </Button>
          <Button disabled type="warning">
            警告字体
          </Button>
          <Button disabled type="success">
            成功字体
          </Button>
          <Button disabled plain type="default">
            默认字体
          </Button>
          <Button disabled plain type="primary">
            主要字体
          </Button>
          <Button disabled plain type="info">
            信息字体
          </Button>
          <Button disabled plain type="danger">
            危险字体
          </Button>
          <Button disabled plain type="warning">
            警告字体
          </Button>
          <Button disabled plain type="success">
            成功字体
          </Button>
        </DemoCard>

        <DemoCard
          title="加载状态"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
          <Button loading type="default">
            默认字体
          </Button>
          <Button loading type="primary">
            主要字体
          </Button>
          <Button loading type="info">
            信息字体
          </Button>
          <Button loading type="danger">
            危险字体
          </Button>
          <Button loading type="warning">
            警告字体
          </Button>
          <Button loading type="success">
            成功字体
          </Button>
          <Button loading plain type="default">
            默认字体
          </Button>
          <Button loading plain type="primary">
            主要字体
          </Button>
          <Button loading plain type="info">
            信息字体
          </Button>
          <Button loading plain type="danger">
            危险字体
          </Button>
          <Button loading plain type="warning">
            警告字体
          </Button>
          <Button loading plain type="success">
            成功字体
          </Button>
        </DemoCard>

        <DemoCard
          title="形状"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
          <Button shape="square" type="default">
            默认字体
          </Button>
          <Button shape="square" type="primary">
            主要字体
          </Button>
          <Button shape="square" type="info">
            信息字体
          </Button>
          <Button shape="square" type="danger">
            危险字体
          </Button>
          <Button shape="square" type="warning">
            警告字体
          </Button>
          <Button shape="square" type="success">
            成功字体
          </Button>
          <Button plain shape="square" type="default">
            默认字体
          </Button>
          <Button plain shape="square" type="primary">
            主要字体
          </Button>
          <Button plain shape="square" type="info">
            信息字体
          </Button>
          <Button disabled shape="square" type="danger">
            危险字体
          </Button>
          <Button disabled shape="square" type="warning">
            警告字体
          </Button>
          <Button disabled shape="square" type="success">
            成功字体
          </Button>
          <Button disabled shape="square" type="default">
            默认字体
          </Button>
          <Button disabled shape="square" type="primary">
            主要字体
          </Button>
          <Button disabled shape="square" type="info">
            信息字体
          </Button>
          <Button plain disabled shape="square" type="default">
            默认字体
          </Button>
          <Button plain disabled shape="square" type="primary">
            主要字体
          </Button>
          <Button plain disabled shape="square" type="info">
            信息字体
          </Button>
          <Button plain disabled shape="square" type="danger">
            危险字体
          </Button>
          <Button plain disabled shape="square" type="warning">
            警告字体
          </Button>
          <Button plain disabled shape="square" type="success">
            成功字体
          </Button>
        </DemoCard>

        <DemoCard
          title="按钮尺寸"
          style={{
            gap: 10,
          }}
        >
          <Button size="large" style={{width: pt(620)}} type="default">
            默认大
          </Button>
          <Button size="normal" type="default">
            默认中
          </Button>
          <Button size="small" type="default">
            默认小
          </Button>

          <Button size="large" style={{width: pt(620)}} type="primary">
            默认大
          </Button>
          <Button size="normal" type="primary">
            默认中
          </Button>
          <Button size="small" type="primary">
            默认小
          </Button>

          <Button size="large" style={{width: pt(620)}} type="info">
            默认大
          </Button>
          <Button size="normal" type="info">
            默认中
          </Button>
          <Button size="small" type="info">
            默认小
          </Button>

          <Button size="large" style={{width: pt(620)}} type="danger">
            默认大
          </Button>
          <Button size="normal" type="danger">
            默认中
          </Button>
          <Button size="small" type="danger">
            默认小
          </Button>

          <Button size="large" style={{width: pt(620)}} type="warning">
            默认大
          </Button>
          <Button size="normal" type="warning">
            默认中
          </Button>
          <Button size="small" type="warning">
            默认小
          </Button>

          <Button size="large" style={{width: pt(620)}} type="success">
            默认大
          </Button>
          <Button size="normal" type="success">
            默认中
          </Button>
          <Button size="small" type="success">
            默认小
          </Button>
        </DemoCard>

        <DemoCard
          title="块级元素"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
          <Button block style={{width: pt(620)}} type="default">
            块级元素
          </Button>
          <Button block style={{width: pt(620)}} type="primary">
            块级元素
          </Button>
          <Button block style={{width: pt(620)}} type="info">
            块级元素
          </Button>
          <Button block style={{width: pt(620)}} type="danger">
            块级元素
          </Button>
          <Button block style={{width: pt(620)}} type="warning">
            块级元素
          </Button>
          <Button block style={{width: pt(620)}} type="success">
            块级元素
          </Button>
        </DemoCard>
        <DemoCard
          title="自定义颜色"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: 10
          }}
        >
        <Button color="#7232dd">
            单色按钮
          </Button>
          <Button
            color="#7232dd"
            plain
          >
            单色按钮
          </Button>
          <Button
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          >
            渐变color
          </Button>
          <Button
            color="linear-gradient(to right, #ff6034, #ee0a24)"
            plain
          >
            渐变color
          </Button>
        </DemoCard>
      </DemoPage>
  )
}

export default ButtonDemo
