import React, {
  useState
} from 'react';
import Switch from '../switch';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  alertInfo: string;
  twoSInfo: string;
  open: string;
  close: string;
}

const SwitchDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '基础用法',
      title2: '禁用状态',
      title3: 'onChange事件',
      title4: '非同步控制',
      title5: '自定义颜色',
      title6: '支持文字',
      alertInfo: '触发了onChange事件，开关状态',
      twoSInfo: '2秒后异步触发',
      open: '开',
      close: '关'

    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '禁用狀態',
      title3: 'onChange事件',
      title4: '非同步控制',
      title5: '自定義顏色',
      title6: '支援文字',
      alertInfo: '觸發了onChange事件，開關狀態',
      twoSInfo: '2秒後非同步觸發',
      open: '開',
      close: '關'

    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Disable status',
      title3: 'onChange event',
      title4: 'Asynchronous control',
      title5: 'Custom Colors',
      title6: 'Support text',
      alertInfo: 'The onChange event is triggered, and the switch status is',
      twoSInfo: 'Asynchronous trigger after 2 seconds',
      open: 'open',
      close: 'close'

    }
  });

  const [checkedAsync, setCheckedAsync] = useState(true);

  const onChangeAsync = (value: boolean, event: Event) => {
    // alert(`2秒后异步触发 ${value}`);
    alert(`${translated.twoSInfo} ${value}`);
    setTimeout(() => {
      setCheckedAsync(value);
    }, 2000);
  };

  return (
    <DemoPage>
      <DemoCard
        // title='基本用法'
        title={translated.title1}
      >
        <Switch checked />
      </DemoCard>

      <DemoCard
        // title='禁用状态'
        title={translated.title2}
      >
        <Switch
          checked
          disable
        />

      </DemoCard>

      <DemoCard
        // title='onChange事件'
        title={translated.title3}
      >
        <Switch
          onChange={(value, event) => {
            // alert(`触发了onChange事件，开关状态：${value}`);
            alert(`${translated.alertInfo}：${value}`);
          }}
        />
      </DemoCard>

      <DemoCard
        // title='异步控制'
        title={translated.title4}
      >
        <Switch
          checked={checkedAsync}
          isAsync
          onChange={onChangeAsync}
        />
      </DemoCard>

      <DemoCard
        // title='自定义颜色'
        title={translated.title5}
      >
        <Switch
          activeColor='blue'
        />
      </DemoCard>

      <DemoCard
        // title='支持文字'
        title={translated.title6}
      >
        <Switch
          activeText={translated.open}
          inactiveText={translated.close}
        />

      </DemoCard>

    </DemoPage>
  );
};

export default SwitchDemo;
