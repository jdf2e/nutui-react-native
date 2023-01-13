# ConfigProvider

### Introduce

Used to configure NutUI-React components globally, providing internationalization support.

```SnackPlayer name=ConfigProvider&dependencies=nutui-rn
import React from 'react';
import { ConfigProvider, Textarea } from "nutui-rn";
import en from "nutui-rn/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

### Install

```javascript
import { ConfigProvider } from 'nutui-rn';
```

## Demo

```SnackPlayer name=ConfigProvider&dependencies=nutui-rn
import React from 'react';
import { ConfigProvider, Textarea } from "nutui-rn";
import en from "nutui-rn/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

## API

### Props

| Props  | Description               | Type     | Default |
| ------ | ------------------------- | -------- | ------- |
| locale | Set up multilingual packs | BaseLang | zhCN    |
