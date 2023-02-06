# ActionSheet 動作面板

### 介紹

从底部弹出的动作菜单面板。

### 安裝

```ts
import { ActionSheet } from '@nutui/nutui-react-native';
```

## 代碼示例

### 基本用法

```SnackPlayer name=ActionSheet
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

interface Item {
  name: string
  subname?: string
  disable?: boolean
}
const App = () => {
  const [val1, setVal1] = useState('')
  const [isVisible1, setIsVisible1] = useState(false)
  const menuItemsOne: ItemType<string>[] = [
    {
      name: '選項一',
    },
    {
      name: '選項二',
    },
    {
      name: '選項三',
    },
  ]
  const chooseItem = (itemParams: any) => {
    console.log(itemParams.name, 'itemParams')
    setVal1(itemParams.name)
    setIsVisible1(false)
  }

  return (
    <>
    <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
      <View>
        <Text>基础用法</Text>
      </View>
      <Text>{val1}</Text>
    </Cell>

    <ActionSheet
      visible={isVisible1}
      menuItems={menuItemsOne}
      onChoose={chooseItem}
      onCancel={() => setIsVisible1(false)}
     />
    </>
  );
};
export default App;

```

### 展示取消按鈕

```SnackPlayer name=ActionSheet
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [val2, setVal2] = useState('')
  const menuItemsOne: ItemType<string>[] = [
    {
      name: '選項一',
    },
    {
      name: '選項二',
    },
    {
      name: '選項三',
    },
  ]
  const chooseItemTwo = (itemParams: Item) => {
    setVal2(itemParams.name)
    setIsVisible2(false)
  }
  return (
    <>
    <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
      <View>
        <Text>展示取消按鈕</Text>
      </View>
      <Text className="selected-option">{val2}</Text>
    </Cell>

    <ActionSheet
      visible={isVisible2}
      cancelTxt="取消"
      menuItems={menuItemsOne}
      onChoose={chooseItemTwo}
      onCancel={() => setIsVisible2(false)}
     />
    </>
  );
};
export default App;

```

### 展示描述資訊

```SnackPlayer name=ActionSheet
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-native';
import { View, Text } from 'react-native';

const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [val3, setVal3] = useState('')
  const menuItemsTwo: ItemType<string>[] = [
    {
      name: '選項一',
    },
    {
      name: '選項二',
    },
    {
      name: '選項三',
      subname: '描述資訊',
    },
  ]
  const chooseItemThree = (itemParams: Item) => {
    setVal3(itemParams.name)
    setIsVisible3(false)
  }
  return (
    <>
    <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
      <View>
        <Text>展示描述資訊</Text>
      </View>
      <Text>{val3}</Text>
    </Cell>
    <ActionSheet
      visible={isVisible3}
      description="這是一段描述資訊"
      cancelTxt="取消"
      menuItems={menuItemsTwo}
      onChoose={chooseItemThree}

      onCancel={() => setIsVisible3(false)}
     />
    </>
  );
};
export default App;

```

### 選項状态

```SnackPlayer name=ActionSheet
import  React, { useState } from "react";
import { ActionSheet,Cell } from 'nutui-rn';

const App = () => {
  const [isVisible4, setIsVisible4] = useState(false)
  const menuItemsThree: ItemType<string | boolean>[] = [
    {
      name: '著色選項',
    },
    {
      name: '禁用選項',
      disable: true,
    },
  ]
  return (
    <>
    <Cell isLink onClick={() => setIsVisible4(!isVisible4)}>
      <View>
        <Text>選項状态</Text>
      </View>
    </Cell>
    <ActionSheet
      visible={isVisible4}
      cancelTxt="取消"
      menuItems={menuItemsThree}
      chooseTagValue="着色選項"
      onCancel={() => setIsVisible4(false)}

      onChoose={() => {
        setIsVisible4(false)
      }}
     />
    </>
  );
};
export default App;

```

## Prop

| 字段           | 說明                                   | 類型    | 默認值    |
| -------------- | -------------------------------------- | ------- | --------- |
| visible        | 遮罩層可見                             | Boolean | false     |
| cancelTxt      | 取消文案                               | String  | '取消'    |
| menuItems      | 列表項                                 | Array   | [ ]       |
| optionTag      | 設置列表項展示使用參數                 | String  | 'name'    |
| optionSubTag   | 設置列表項描述展示使用參數             | String  | 'subname' |
| title          | 設置面板標題                           | String  | ''        |
| description    | 設置面板副標題/描述                    | String  | ''        |
| chooseTagValue | 設置選中項的值，和'option-tag'的值對應 | String  | ''        |
| color          | 高亮顏色                               | String  | '#ee0a24' |

## Event

| 字段             | 說明               | 回調參數                            |
| ---------------- | ------------------ | ----------------------------------- |
| onChoose | 選擇之後觸發       | 選中列表項 item, 選中的索引值 index |
| onCancel | 點擊取消文案時觸發 | 無                                  |
