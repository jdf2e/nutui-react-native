import React from 'react';
import { View, Image } from 'react-native';
import { Empty } from './empty';
import pt from '../utils/pt';
import { useTranslate } from '../utils';
import Button from '../button';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  ce5c5446: string;
  c38a08ef: string;
  b840c88f: string;
  a74a1fd4: string;
  '8dab2f66': string;
  cfbdc781: string;
  c3a3a1d2: string;
  e51e4582: string;
  adb1a8b2: string;
  a52bef0c: string;
  d04fcbda: string;
  b8a453e3: string;
}

const EmptyDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '自定义内容大小',
      b840c88f: '图片类型，内置3个',
      a74a1fd4: '自定义图片',
      '8dab2f66': '底部内容',
      cfbdc781: '无数据',
      c3a3a1d2: '无内容',
      e51e4582: '加载失败/错误',
      adb1a8b2: '无网络',
      a52bef0c: '无优惠券',
      d04fcbda: '加载失败',
      b8a453e3: '重试'
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '自定義內容大小',
      b840c88f: '圖片類型，內置3個',
      a74a1fd4: '自定義圖片',
      '8dab2f66': '底部內容',
      cfbdc781: '無數據',
      c3a3a1d2: '無內容',
      e51e4582: '加載失敗/錯誤',
      adb1a8b2: '無網絡',
      a52bef0c: '無優惠券',
      d04fcbda: '加載失敗',
      b8a453e3: '重試'
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'Custom content size',
      b840c88f: 'Picture type, built-in 3',
      a74a1fd4: 'Custom image',
      '8dab2f66': 'Bottom content',
      cfbdc781: 'No Data',
      c3a3a1d2: 'No Content',
      e51e4582: 'Load Failed',
      adb1a8b2: 'No Network',
      a52bef0c: 'No Coupon',
      d04fcbda: 'Failed to load',
      b8a453e3: 'Retry'
    }
  });
  //   const [tabvalue, setTabvalue] = useState('');

  return (
    <DemoPage>
      <DemoCard title={translated.ce5c5446}>
        <Empty description={translated.cfbdc781} />
      </DemoCard>
      <DemoCard title={translated.c38a08ef}>
        <Empty description={translated.cfbdc781} imageSize={100} />
      </DemoCard>
      <DemoCard title={translated.b840c88f}>
        <Empty image='empty' description={translated.c3a3a1d2} />
        <Empty image='error' description={translated.e51e4582} />
        <Empty image='network' description={translated.adb1a8b2} />
      </DemoCard>
      <DemoCard title={translated.a74a1fd4}>
        <Empty
          description={translated.a52bef0c}
          image={
            <Image
              style={{ width: pt(340), height: pt(340) }}
              source={{ uri: 'https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png' }}
            />
          }
        />
      </DemoCard>
      <DemoCard title={translated['8dab2f66']}>
        <Empty image='error' description={translated.d04fcbda}>
          <View style={{ marginTop: pt(10) }}>
            <Button icon='refresh' type='primary'>
              {translated.b8a453e3}
            </Button>
          </View>
        </Empty>
      </DemoCard>
    </DemoPage>
  );
};

export default EmptyDemo;
