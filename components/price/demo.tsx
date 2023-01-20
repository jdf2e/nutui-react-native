import React, { useState, useEffect } from 'react';
import { useTranslate } from '../utils';
import { Price } from './price';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
}

const PriceDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '支持三种尺寸：small、normal、large',
      title2: '不保留小数',
      title3: '有人民币符号，无千位分隔',
      title4: '有人民币符号，有千位分隔，保留小数点后三位',
      title5: '调整 symbol 符号位置',
      title6: '异步随机变更'
    },
    'zh-TW': {
      title1: '支持三種尺寸：small、normal、large',
      title2: '不保留小數',
      title3: '有人民幣符號，無千位分隔',
      title4: '有人民幣符號，有千位分隔，保留小數點後三位',
      title5: '調整 symbol 符號位置',
      title6: '異步隨機變更'
    },
    'en-US': {
      title1: 'Support three sizes：small、normal、large',
      title2: 'No decimals',
      title3: 'With RMB symbol, no thousands separator',
      title4:
          'With RMB symbol, separated by thousands, keep three decimal places',
      title5: 'Adjust the symbol position',
      title6: 'Asynchronous random changes'
    }
  });
  const [price, setPrice] = useState(Math.random() * 10000000);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrice(Math.random() * 10000000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <DemoPage>
      <DemoCard title={translated.title1}>
        <Price price={0} size='small' needSymbol thousands />
        <Price price={0} size='normal' needSymbol thousands />
        <Price price={0} size='large' needSymbol thousands />
      </DemoCard>
      <DemoCard title={translated.title2}>
        <Price
          price={8888}
          decimalDigits={0}
          needSymbol
          size='normal'
          thousands
        />
      </DemoCard>
      <DemoCard title={translated.title3}>
        <Price price={10010.01} size='normal' needSymbol thousands={false} />
      </DemoCard>
      <DemoCard title={translated.title4}>
        <Price
          price={15213.1221}
          size='normal'
          decimalDigits={3}
          needSymbol
          thousands
        />
      </DemoCard>
      <DemoCard title={translated.title5}>
        <Price
          price={8888.01}
          size='normal'
          position='after'
          symbol='元'
          needSymbol
          thousands
        />
      </DemoCard>
      <DemoCard title={translated.title6}>
        <Price
          price={price}
          decimalDigits={3}
          size='normal'
          needSymbol
          thousands
        />
      </DemoCard>
    </DemoPage>
  );
};

export default PriceDemo;
