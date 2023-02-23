import React, {
  useState,
  useEffect
} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Swiper from '../swiper';
import SwiperItem from '../swiperitem';
import Icon from '../icon';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  basic: string;
  asyc: string;
  dynamicDel: string;
  size: string;
  indicator: string;
  btns: string;
  vertical: string;
  horizontalCenter: string;
  verticalCenter: string;
}

const SwiperDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      asyc: '异步加载(3s)',
      dynamicDel: '动态加载',
      size: '自定义大小',
      indicator: '自定义指示器',
      btns: '手动切换',
      vertical: '垂直方向',
      horizontalCenter: '水平居中展示',
      verticalCenter: '垂直居中展示'
    },
    'en-US': {
      basic: 'Basic Usage',
      asyc: 'Asynchronous loading(3s)',
      dynamicDel: 'Dynamic loading',
      size: 'Custom size',
      indicator: 'Custom indicator',
      btns: 'Manual switching',
      vertical: 'Vertical direction',
      horizontalCenter: 'Horizontal center display',
      verticalCenter: 'Vertical center display'
    }
  });

  const swiperRef = React.useRef<any>(null);

  const [list, setList] = useState<string[]>([]);

  const [list1, setList1] = useState<string[]>([
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
  ]);

  const [current, setCurrent] = useState(1);

  const [current2, setCurrent2] = useState(1);

  const onChange3 = (e) => {
    setCurrent(e + 1);
  };

  const onChange4 = (e) => {
    setCurrent2(e + 1);
  };

  const handlePrev = () => {
    swiperRef.current.prev();
  };

  const handleNext = () => {
    swiperRef.current.next();
  };

  useEffect(() => {
    setTimeout(() => {
      const arr: string[] = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
      ];

      setList(arr);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const arr = list1.slice();

      arr.splice(1, 1);
      setList1(arr);
    }, 3000);
  }, []);

  return (
    <DemoPage>
      <DemoCard
        // title='基本用法'
        title={translated.basic}
      >
        <Swiper
          width={320}
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
      </DemoCard>

      <DemoCard
        // title='异步加载'
        title={translated.asyc}
      >
        <Swiper
          width={320}
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
      </DemoCard>

      <DemoCard
        // title='动态加载'
        title={translated.dynamicDel}
      >
        <Swiper
          width={320}
          height={150}
          paginationColor='#426543'
          autoPlay={1000}
          initPage={0}
          paginationVisible
        >
          {list1.map((item) => {
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

      </DemoCard>

      <DemoCard
        // title='自定义大小'
        title={translated.size}
      >
        <Swiper
          width={290}
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

      </DemoCard>

      <DemoCard
        // title='自定义分页指示器'
        title={translated.indicator}
      >
        <Swiper
          initPage={0}
          loop
          width={320}
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

      </DemoCard>

      <DemoCard
        // title='手动切换'
        title={translated.btns}
      >
        <Swiper
          width={320}
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

      </DemoCard>

      <DemoCard
        // title='垂直方向'
        title={translated.vertical}
      >
        <Swiper
          loop
          initPage={0}
          width={320}
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
      </DemoCard>

    </DemoPage>
  );
};

export default SwiperDemo;
