# SideNavBar 組件

### 介紹

用於內容選擇和切換

### 安裝

```tsx
import {
  SideNavBar,
  SubSideNavBar,
  SideNavBarItem,
} from '@nutui/nutui-react-native';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React,{useState} from "react";
import {Cell, SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react-native';

const App = () => {
    const [navBarState, setNavBarState] = useState({
    visible: false,
    position: 'left',
  })
  const changeNarBar = (visible, position= navBarState.position) => {
    setNavBarState({
      visible,
      position,
    })
  }

  return (
    <>
    <Cell
          title="左側彈出"
          isLink
          onClick={() => {
            changeNarBar(true, 'left')
          }}
        />
        <Cell
          title="右側彈出"
          isLink
          onClick={() => {
            changeNarBar(true, 'right')
          }}
        />
        <SideNavBar
          title="首頁"
          visible={navBarState.visible}
          position={navBarState.position}
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一級標題" ikey="1-0" >
            <SideNavBarItem title="一級內容1" ikey="1-01" />
            <SideNavBarItem title="一級內容2" ikey="1-02" />
            <SubSideNavBar title="二級標題" ikey="2-0">
              <SideNavBarItem title="二級內容1" ikey="2-01" />
              <SideNavBarItem title="二級內容2" ikey="2-02" />
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};
export default App;
```

:::

### 嵌套及回調

:::demo

```tsx
import  React,{useState} from "react";
import {Cell,SideNavBar,SubSideNavBar,SideNavBarItem } from '@nutui/nutui-react-native';

const App = () => {
  const [visible, setVisible] = useState(false)
  const changeNarBar = (visible) => {
   setVisible(visible)
  }
  const clickItem = ({ title, ikey }) => {
    Toast.text(`title=${title},ikey=${ikey}`)
  }
  const clickTitle = ({ title, ikey, isShow }) => {
    Toast.text(`title=${title},ikey=${ikey},isShow=${isShow}`)
  }
  return (
    <>
      <Cell
          title="顯示"
          isLink
          onClick={() => {
            changeNarBar(true)
          }}
        />
    <SideNavBar
          title="首頁"
          visible={visible}
          position='left'
          handleClose={() => {
            changeNarBar(false)
          }}
        >
          <SubSideNavBar title="一級標題" ikey="1-0" titleClick={clickTitle}>
            <SideNavBarItem title="一級內容1" ikey="1-01" click={clickItem} />
            <SideNavBarItem title="一級內容2" ikey="1-02" />
            <SubSideNavBar title="二級標題" ikey="2-0">
              <SideNavBarItem title="二級內容1" ikey="2-01" />
              <SideNavBarItem title="二級內容2" ikey="2-02" />
                <SubSideNavBar title="三級標題" ikey="3-0">
                  <SideNavBarItem title="三級內容1" ikey="3-01" />
                  <SideNavBarItem title="三級內容2" ikey="3-02" />
                </SubSideNavBar>
            </SubSideNavBar>
          </SubSideNavBar>
        </SideNavBar>
    </>
  );
};
export default App;
```

:::

## API

### 1、SideNavBar

| 參數     | 說明           | 類型            | 默認值 |
| -------- | -------------- | --------------- | ------ |
| visible  | 組件是否顯示   | boolean         | false  |
| title    | 整體標題       | String          | -      |
| width    | 遮罩寬度百分比 | String          | '80%'  |
| position | 彈出位置       | 'left'、'right' | 'left' |
| offset   | 縮進寬度       | number          | 20     |

### 2、SubSideNavBar

| 參數  | 說明             | 類型           | 默認值 |
| ----- | ---------------- | -------------- | ------ |
| ikey  | 導航唯一標識     | String、Number |        |
| title | 整體標題         | String         | -      |
| open  | 導航是否默認展開 | Boolean        | true   |

### 3、SideNavBarItem

| 參數  | 說明         | 類型           | 默認值 |
| ----- | ------------ | -------------- | ------ |
| ikey  | 導航唯一標識 | String、Number |        |
| title | 整體標題     | String         | -      |

## Events

### 1、SideNavBar Events

| 事件名  | 說明           | 回調參數 |
| ------- | -------------- | -------- |
| onClose | 關閉遮罩時觸發 | -        |

### 2、SubSideNavBar Events

| 事件名  | 說明                                          | 回調參數 |
| ------- | --------------------------------------------- | -------- |
| onPress | 導航點擊,對象形式返回點擊{ title,ikey,isShow} | -        |

### 3、SideNavBarItem Events

| 事件名  | 說明                                   | 回调参数 |
| ------- | -------------------------------------- | -------- |
| onPress | 導航點擊,對象形式返回點擊{ title,ikey} | -        |
