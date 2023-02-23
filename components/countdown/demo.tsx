import React, {
    useState,
    useRef
  } from 'react';
  import {
    View,
    Text
  } from 'react-native';
  import CountDown from '../countdown';
  import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
  import { useTranslate } from '../utils';
  
  interface T {
    basic: string;
    format: string;
    millisecond: string;
    serverTime: string;
    async: string;
    controlTime: string;
    customStyle: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
  }
  
  const CountdownDemo = () => {
    const [translated] = useTranslate<T>({
      'zh-CN': {
        basic: '基本用法',
        format: '自定义格式',
        millisecond: '毫秒级渲染',
        serverTime: '以服务端的时间为准',
        async: '异步更新结束时间',
        controlTime: '控制开始和暂停的倒计时',
        customStyle: '自定义展示样式',
        day: '天',
        hour: '时',
        minute: '分',
        second: '秒'
      },
      'zh-TW': {
        basic: '基本用法',
        format: '自定义格式',
        millisecond: '毫秒级渲染',
        serverTime: '以服务端的时间为准',
        async: '异步更新结束时间',
        controlTime: '控制开始和暂停的倒计时',
        customStyle: '自定义展示样式',
        day: '天',
        hour: '时',
        minute: '分',
        second: '秒'
      },
      'en-US': {
        basic: 'Basic Usage',
        format: 'Custom Format',
        millisecond: 'Millisecond',
        serverTime: 'Server Time Prevails',
        async: 'End-Time of Asyn Update',
        controlTime: 'Manual Control',
        customStyle: 'Custom Style',
        day: 'Day',
        hour: ':',
        minute: ':',
        second: ''
      }
    });
  
    const stateRef1 = useRef({
      endTime: Date.now() + 60 * 1000
    });
    const onEnd1 = () => {
      //   console.log('countdown: ended.');
    };
    const stateRef2 = useRef({
      endTime: Date.now() + 60 * 1000
    });
  
    const stateRef3 = useRef({
      endTime: Date.now() + 60 * 1000
    });
  
    const stateRef4 = useRef({
      serverTime: Date.now() - 20 * 1000,
      endTime: Date.now() + 60 * 1000
    });
  
    const stateRef5 = useRef({
      endTime: Date.now() + 60 * 1000
    });
  
    const [resetTime, setResetTime] = useState({
      d: '1',
      h: '00',
      m: '00',
      s: '00'
    });
  
    const onUpdate = (v) => {
      setResetTime(v);
    };
  
    return (
      <DemoPage>
        {/* 基本用法 */}
        <DemoCard
          // title='基本用法'
          title={translated.basic}
        >
          <CountDown
            endTime={stateRef1.current.endTime}
            onEnd={onEnd1}
          />
  
        </DemoCard>
        {/* 自定义格式 */}
        <DemoCard
          // title='自定义格式'
          title={translated.format}
        >
          <CountDown
            endTime={stateRef2.current.endTime}
            // format='DD 天 HH 时 mm 分 ss 秒'
            format={`DD ${translated.day} HH ${translated.hour} mm ${translated.minute} ss ${translated.second}`}
          />
        </DemoCard>
        {/* 毫秒级渲染 */}
        <DemoCard
          // title='毫秒级渲染'
          title={translated.millisecond}
        >
          <CountDown
            endTime={stateRef3.current.endTime}
            millisecond format='HH:mm:ss:SS'
          />
  
        </DemoCard>
  
        {/* 以服务端的时间为准 */}
        <DemoCard
          // title='以服务端的时间为准'
          title={translated.serverTime}
        >
          <CountDown
            startTime={stateRef4.current.serverTime}
            endTime={stateRef4.current.endTime}
          />
        </DemoCard>
  
        {/* 自定义展示 */}
        <DemoCard
          // title='自定义展示'
          title={translated.customStyle}
        >
          <CountDown
            endTime={stateRef5.current.endTime}
            onUpdate={onUpdate}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14
                  },
                  { color: '#000' }
                ]}
              >
                {resetTime.d}{translated.day}
              </Text>
              <View
                style={{
                  flexShrink: 0,
                  borderRadius: 6,
                  width: 20,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e8220e'
                }}
              >
  
                <Text style={
                  {
                    color: '#fff',
                    fontSize: 14
                  }
                }
                >
                  {resetTime.h}
                </Text>
  
              </View>
  
              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14
                  },
                  { color: '#000' }
                ]}
              >
                  :
              </Text>
  
              <View
                style={{
                  flexShrink: 0,
                  borderRadius: 6,
                  width: 20,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e8220e'
                }}
              >
  
                <Text style={{
                  color: '#fff',
                  fontSize: 14
                }}
                >
                  {resetTime.m}
                </Text>
              </View>
  
              <Text
                style={[
                  {
                    color: '#fff',
                    fontSize: 14
                  },
                  { color: '#000' }
                ]}
              >
                  :
              </Text>
              <View
                style={{
                  flexShrink: 0,
                  borderRadius: 6,
                  width: 20,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#e8220e'
                }}
              >
  
                <Text style={{
                  color: '#fff',
                  fontSize: 14
                }}
                >
                  {resetTime.s}
                </Text>
              </View>
  
            </View>
          </CountDown>
        </DemoCard>
  
      </DemoPage>
    );
  };
  
  export default CountdownDemo;
  