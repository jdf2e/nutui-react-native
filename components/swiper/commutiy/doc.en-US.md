# Swiper

### Intro

Often used in a group of pictures or card rotation.

### Install

```tsx
import { Swiper, SwiperItem } from '@nutui/nutui-react-native';
```

### Basic Usage

`autoPlay` Duration of automatic rotation
`initPage` Initial index value
`paginationVisible` Show paging indicator
`paginationColor` Indicator color customization
`onChange` When the card changes

:::demo

```tsx
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

:::

### Asynchronous loading

:::demo

```tsx
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

:::

### Dynamic loading

Support dynamic addition / deletion of pictures

:::demo

```tsx
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

:::

### Custom size

`width` Custom rotation size

:::demo

```tsx
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

:::

### Custom paging indicator

`pageContent` Custom indicator

:::demo

```tsx
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

:::

### Manual switching

You can manually switch through `api` (`prev`, `next`)

:::demo

```tsx
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

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

```tsx
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

:::

## API

### Props

| Attribute         | Description                                                 | Type                      | Default           |
| ----------------- | ----------------------------------------------------------- | ------------------------- | ----------------- |
| width             | Width of rotation car                                       | Number \| String          | window.innerWidth |
| height            | Height of rotation card                                     | String \| Number          | 0                 |
| direction         | Rotation direction, optional value：`horizontal`,`vertical` | String                    | 'horizontal'      |
| paginationVisible | Whether the pagination indicator is displayed               | Boolean                   | false             |
| paginationColor   | Pagination indicator selected color                         | String                    | '#fff'            |
| loop              | Whether to rotate                                           | Boolean                   | true              |
| duration          | Animation duration（Unit ms                                 | Number \| String          | 500               |
| autoPlay          | Automatic rotation duration, 0 means no automatic           | Number \| String          | 0                 |
| initPage          | Initialize index value                                      | Number \| String          | 0                 |
| touchable         | Is it possible to touch swipe                               | Boolean                   | true              |
| pageContent       | Custom indicator                                            | String \| React.ReactNode | -                 |

### Events

| Event    | Description                   | Arguments           |
| -------- | ----------------------------- | ------------------- |
| onChange | Callback after card switching | Current index value |

### API

| Event | Description                      | Arguments    |
| ----- | -------------------------------- | ------------ |
| prev  | Switch to previous page          | -            |
| next  | Switch to next page              | -            |
| to    | Switch to the specified rotation | index:number |
