# ConfigProvider

### Introduce

Used to configure NutUI-React components globally, providing internationalization support.

:::demo

```tsx
import React from 'react';
import { ConfigProvider, Textarea } from "@nutui/nutui-react-native";
import en from "@nutui/nutui-react-native/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

:::

### Install

```tsx
import { ConfigProvider } from '@nutui/nutui-react-native';
```

## Demo

:::demo

```tsx
import React from 'react';
import { ConfigProvider, Textarea } from "@nutui/nutui-react-native";
import en from "@nutui/nutui-react-native/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

:::

## API

### Props

| Props  | Description               | Type     | Default |
| ------ | ------------------------- | -------- | ------- |
| locale | Set up multilingual packs | BaseLang | zhCN    |
