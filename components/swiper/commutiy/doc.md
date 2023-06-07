# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。

### 安装

```javascript
import { Swiper,SwiperItem } from '@nutui/nutui-react-native';
```

## 代码演示

### 基础用法

`autoPlay` 自动轮播的时长
`initPage` 初始索引值
`paginationVisible` 是否显示分页指示器
`paginationColor` 指示器颜色自定义
`onChange` 当卡片发生变化

```SnackPlayer
import React, { useState } from 'react'
import { Swiper,SwiperItem, Image } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
       <Swiper
          height={150}
          paginationColor='#426543'
          paginationBgColor='#426ddd'
          autoPlay={3000}
          initPage={0}
          paginationVisible
        >

          <SwiperItem>
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{
                uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'
              }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
        </Swiper>
    </>
  )
}
export default App;
```
### 异步加载

```SnackPlayer
import React, { useState, useEffect } from 'react'
import { Swiper,SwiperItem, Image } from '@nutui/nutui-react-native';

const App = () => {
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      const arr: string[] = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ]
      setList(arr)
    }, 3000)
  }, [])
  return (
    <>
       <Swiper
          height={150}
          paginationColor='#426543'
          autoPlay={1000}
          initPage={0}
          paginationVisible
        >
          {list.map((item) => {
            return (
              <SwiperItem key={item}>
                <Image
                  source={{ uri: item }}
                  style={{
                    width: '100%',
                    height: 150
                  }}
                />
              </SwiperItem>
            );
          })}
        </Swiper>
    </>
  )
}
export default App;
```

### 动态加载

支持动态增加/删除图片

```SnackPlayer
import React, { useState, useEffect } from 'react'
import { Swiper,SwiperItem, Image } from '@nutui/nutui-react-native';

const App = () => {
  const [list, setList] = useState<string[]>([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ])
  useEffect(() => {
    setTimeout(() => {
      const arr = list.slice()
      arr.splice(1, 1)
      setList(arr)
    }, 3000)
  }, [])
  return (
    <>
      <Swiper
          height={150}
          paginationColor='#426543'
          autoPlay={1000}
          initPage={0}
          paginationVisible
        >
          {list.map((item) => {
            return (
              <SwiperItem key={item}>
                <Image
                  source={{ uri: item }}
                  style={{
                    width: '100%',
                    height: 150
                  }}
                />
              </SwiperItem>
            );
          })}
        </Swiper>
    </>
  )
}
export default App;
```

### 自定义大小

`width` 自定义轮播大小
```SnackPlayer
import React, { useState } from 'react'
import { Swiper,SwiperItem, Image } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
      <Swiper
          width={300}
          height={150}
          paginationColor='#426543'
          paginationBgColor='#426ddd'
          autoPlay={3000}
          initPage={0}
          paginationVisible
        >

          <SwiperItem>
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{
                uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'
              }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
        </Swiper>
    </>
  )
}
export default App;
```

### 自定义分页指示器

`pageContent` 表示自定义指示器

```SnackPlayer
import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'
import { Swiper,SwiperItem, Image } from '@nutui/nutui-react-native';

const App = () => {
  const [current, setCurrent] = useState(1)
  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  return (
    <>
      <Swiper
          initPage={0}
          loop
          height={150}
          onChange={onChange3}
          pageContent={
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 46,
                height: 22,
                borderRadius: 22,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)'
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff'
                }}
              > {current}/4 </Text>
            </View>
          }
        >
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
        </Swiper>
    </>
  )
}
export default App;
```

### 手动切换

可通过 `API`(`prev`,`next`)进行手动切换

```SnackPlayer
import React, { useState, useRef } from 'react'
import {
  View,
  Text
} from 'react-native'
import { Swiper, SwiperItem, Icon, Image } from '@nutui/nutui-react-native';

const App = () => {
  const swiperRef = React.useRef<any>(null)
  const [current2, setCurrent2] = useState(1)

  const onChange3 = (e) => {
    setCurrent(e + 1)
  }
  const handlePrev = () => {
    swiperRef.current.prev()
  }
  const handleNext = () => {
    swiperRef.current.next()
  }

  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]
  return (
    <>
       <Swiper
          height={150}
          ref={swiperRef}
          loop
          initPage={1}
          onChange={onChange4}
          pageContent={
            (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 46,
                  height: 22,
                  borderRadius: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.3)'
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: '#fff'
                  }}
                >
                  {current2}/4
                </Text>

              </View>
            )}
        >
          {list.map((item) => {
            return (
              <SwiperItem key={item}>
                <Image
                  source={{ uri: item }}
                  style={{
                    width: '100%',
                    height: 150
                  }}
                />
              </SwiperItem>
            );
          })}
        </Swiper>

        <View
          style={{
            width: '100%',
            position: 'absolute',
            top: '50%',
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 20,
              height: 30,
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }}

            onTouchStart={() => {
              handlePrev();
            }}
          >
            <Icon name='left' />
          </View>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 20,
            height: 30,
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}

          onTouchStart={() => {
            handleNext();
          }}
          >
            <Icon name='right' />
          </View>
        </View>
    </>
  )
}
export default App;
```

### 垂直方向

`direction` 自定义轮播方向

```SnackPlayer
import React, { useState } from 'react'
import { Swiper,SwiperItem, Image } from '@nutui/nutui-react-native';

const App = () => {
  return (
    <>
     <Swiper
          loop
          initPage={0}
          direction='vertical'
          autoPlay={3000}
          height={150}
          paginationVisible
        >
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
          <SwiperItem >
            <Image
              source={{ uri: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg' }}
              style={{
                width: '100%',
                height: 150
              }}
            />
          </SwiperItem>
        </Swiper>
    </>
  )
}
export default App;
```

## API

### Props

| 参数              | 说明                                   | 类型                      | 默认值            |
| ----------------- | -------------------------------------- | ------------------------- | ----------------- |
| width             | 轮播卡片的宽度                         | Number \| String          | window.innerWidth |
| height            | 轮播卡片的高度                         | String \| Number          | 0                 |
| direction         | 轮播方向,可选值`horizontal`,`vertical` | String                    | 'horizontal'      |
| paginationVisible | 分页指示器是否展示                     | Boolean                   | false             |
| paginationColor   | 分页指示器选中的颜色                   | String                    | '#fff'            |
| loop              | 是否循环轮播                           | Boolean                   | true              |
| duration          | 动画时长（单位是ms）                   | Number \| String          | 500               |
| autoPlay          | 自动轮播时长，0表示不会自动轮播        | Number \| String          | 0                 |
| initPage          | 初始化索引值                           | Number \| String          | 0                 |
| touchable         | 是否可触摸滑动                         | Boolean                   | true              |
| pageContent       | 自定义指示器                           | String \| React.ReactNode |
-                 |


### Events

| 事件名   | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| onChange | 卡片切换后的回调 | 当前索引值index |



### API

| 事件名 | 说明           | 参数         |
| ------ | -------------- | ------------ |
| prev   | 切换到上一页   | -            |
| next   | 切换到下一页   | -            |
| to     | 切换到指定轮播 | index:number |
