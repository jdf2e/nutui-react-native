import React, {
  useRef
} from 'react';
import {
  View,
  Text
} from 'react-native';
import Swipe from '../swipe';
import Button from '../button';
import InputNumber from '../inputnumber';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import pt from '../utils/pt';
import { useTranslate } from '../utils';

type TSwipeDemo = {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  click: string;
  sure: string;
  del: string;
  huadong: string;
  choose: string;
  event: string;
  goods: string;
  collect: string;
  open: string;
  close: string;
  tips: string;
  cart: string;
  leftDel: string;
  disabled: string;
  chooseTips: string;
  deleteTips: string;
};

const SwipeDemo = () => {
  const [translated] = useTranslate<TSwipeDemo>({
    'zh-CN': {
      title1: '基础用法',
      title2: '禁用滑动',
      title3: '事件监听',
      title4: '非同步控制',
      title5: '自定义內容',
      click: '点击',
      sure: '确定',
      del: '删除',
      huadong: '滑动',
      choose: '选择',
      event: '事件',
      goods: '商品',
      collect: '收藏',
      open: '打开',
      close: '关闭',
      tips: '提示',
      cart: '加入购物车',
      leftDel: '左滑删除',
      disabled: '禁用滑动',
      chooseTips: '确定选择吗？',
      deleteTips: '确定删除吗？'
    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '禁用滑動',
      title3: '事件監聽',
      title4: '非同步控制',
      title5: '自定義內容',
      click: '點擊',
      sure: '確定',
      del: '刪除',
      huadong: '滑動',
      choose: '選擇',
      event: '事件',
      goods: '商品',
      collect: '收藏',
      open: '打開',
      close: '關閉',
      tips: '提示',
      cart: '加入購物車',
      leftDel: '左滑刪除',
      disabled: '禁用滑動',
      chooseTips: '確定選擇嗎？ ',
      deleteTips: '確定刪除嗎？ '
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Disable sliding',
      title3: 'Event monitoring',
      title4: 'Asynchronous control',
      title5: 'Custom content',
      click: 'click',
      sure: 'ok',
      del: 'delete',
      choose: 'select',
      event: 'event',
      goods: 'goods',
      collect: 'collect',
      open: 'open',
      close: 'close',
      tips: 'tips',
      cart: 'add to shopping cart',
      leftDel: 'left slide delete',
      disabled: 'Disable sliding',
      chooseTips: 'are you sure to choose?',
      deleteTips: 'are you sure to delete?'
    },
    'id-ID': {
      title1: 'penggunaan dasar',
      title2: 'Lumpuhkan sliding',
      title3: 'Monitor waktu',
      title4: 'kontrol asinkron',
      title5: 'isi suai',
      click: 'klik',
      sure: 'OK',
      del: 'Hapus',
      huadong: 'sliding',
      choose: 'pilih',
      event: 'peristiwa',
      goods: 'barang',
      collect: 'kumpulkan',
      open: 'buka',
      close: 'tutup',
      tips: 'tip',
      cart: 'tambah ke kereta belanja',
      leftDel: 'padam slide kiri',
      disabled: 'Lumpuhkan sliding',
      chooseTips: 'Apakah kamu benar-benar memilih?',
      deleteTips: 'Apakah Anda yakin untuk menghapus?'
    }
  });

  const refDom = useRef(null);

  const beforeClose = () => {
    setTimeout(() => {
      refDom.current && refDom.current.close();
    }, 2000);
  };

  return (
    <DemoPage>
      <DemoCard
        // title='基本用法'
        title={translated.title1}
      >
        <Swipe
          leftWidth={100}
          rightWidth={100}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              {/* 选择 */}
              {translated.choose}
            </Button>
          }

          rightAction={
            <Button
              style={{ flex: 1 }}
              type='primary' shape='square'
            >
              {/* 删除 */}
              {translated.del}
            </Button>
          }
        >
          <View>
            <Text>{translated.huadong}</Text>
          </View>
        </Swipe>
      </DemoCard>

      <DemoCard
        // title='禁用用法'
        title={translated.title2}
      >
        <Swipe
          rightWidth={100}
          rightAction={
            <Button
              shape='square'
              type='danger'
            >
              {/* 删除 */}
              {translated.del}
            </Button>
          }
          disabled
        >
          <View>
            <Text>
              {/* 禁用滑动 */}
              {translated.disabled}
            </Text>
          </View>
        </Swipe>
      </DemoCard>

      <DemoCard
        // title='事件监听'
        title={translated.title3}
      >
        <Swipe
          leftWidth={100}
          rightWidth={200}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              {/* 选择 */}
              {translated.choose}
            </Button>
          }
          rightAction={
            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
            >
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                {/* 删除 */}
                {translated.del}
              </Button>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='info'
              >
                {/* 收藏 */}
                {translated.collect}
              </Button>
            </View>
          }

          onActionClick={(e, position) => {
            alert(e + '  ' + position);
          }}
          onOpen={({ name, position }) => {
            alert(name + ' open ' + position);
          }}
          onClose={({ name, position }) => {
            alert(name + '  close ' + position);
          }}
        >
          <View>
            <Text>
              {/* 事件 */}
              {translated.event}
            </Text>
          </View>
        </Swipe>

      </DemoCard>

      <DemoCard
        // title='异步控制'
        title={translated.title4}
      >
        <Swipe
          ref={refDom}
          beforeClose={beforeClose}
          leftWidth={100}
          rightWidth={100}
          leftAction={
            <Button
              style={{ flex: 1 }}
              shape='square'
              type='success'
            >
              {/* 选择 */}
              {translated.choose}
            </Button>
          }
          rightAction={
            <>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                {/* 删除 */}
                {translated.del}
              </Button>
            </>
          }
        >
          <View>
            <Text>
              {/* 事件 */}
              {translated.event}
            </Text>
          </View>
        </Swipe>
      </DemoCard>

      <DemoCard
        // title='自定义内容'
        title={translated.title5}
      >
        <Swipe
          rightWidth={100}
          rightAction={
            <>
              <Button
                style={{ flex: 1 }}
                shape='square'
                type='danger'
              >
                {/* 加入购物车 */}
                {translated.cart}
              </Button>
            </>
          }
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: pt(640)
            }}
          >
            <Text>
              {/* 商品 */}
              {translated.goods}
            </Text>
            <InputNumber />
          </View>

        </Swipe>
      </DemoCard>
    </DemoPage>
  );
};

export default SwipeDemo;
