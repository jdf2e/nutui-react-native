import React from 'react';
import {
  Text
} from 'react-native';
import Icon from '../icon';
import NoticeBar from '../noticebar';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

const NoticebarDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础使用',
      scrollable: '滚动播放',
      mode: '通告栏--关闭模式',
      multiline: '多行展示',
      vertical: '垂直滚动',
      complexAm: '纵向--复杂滚动动画',
      customAm: '纵向--自定义滚动内容',
      customRightIcon: '纵向--自定义右侧图标',
      text: 'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。',
      textShort: 'NutUI 是移动端组件库',
      horseLamp: [
        'NoticeBar 公告栏',
        'Cascader 级联选择',
        'DatePicker 日期选择器',
        'CheckBox 复选按钮'
      ],
      jd: '京东商城'
    },
    'en-US': {
      basic: 'Basic Usage',
      scrollable: 'Scrollable',
      mode: 'Mode',
      multiline: 'Wrapable',
      vertical: 'Vertical Scroll',
      complexAm: 'Vertical Scroll Complex Animation',
      customAm: 'Vertical Scroll Custom Style',
      customRightIcon: 'Vertical Scroll Custom Right Icon',
      text: 'Nutui is a Jingdong style mobile terminal component library. It uses Vue language to write applications that can be used on H5 and applet platforms to help R & D personnel improve development efficiency and development experience.',
      textShort: 'Nutui is a mobile terminal component library.',
      horseLamp: ['NoticeBar', 'Cascader', 'DatePicker', 'CheckBox'],
      jd: 'Jingdong'
    }
  });

  const hello = () => {
    // console.log('hello world')
  };

  const horseLamp1 = translated.horseLamp;

  return (
    <DemoPage>
      <DemoCard
        title={translated.basic}
        style={{
          padding: 0
        }}
      >
        <NoticeBar
          style={{width: 320}}
          text='NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
        />
      </DemoCard>

      <DemoCard
        title={translated.scrollable}
        style={{
          padding: 0,
          marginBottom: 10
        }}
      >
        <NoticeBar
          text='NutUI 是京东风格的移动端组件库'
          style={{width: 320}}
          scrollable
        />

      </DemoCard>

      <DemoCard
        style={{
          padding: 0
        }}
      >
        <NoticeBar
          text='NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
          style={{width: 320}}
          scrollable={false}
        />
      </DemoCard>

      <DemoCard
        title={translated.mode}
        style={{
          padding: 0,
          marginBottom: 10
        }}
      >
        <NoticeBar
          closeMode
          style={{width: 320}}
          onClick={hello}
        >
            NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
        </NoticeBar>

      </DemoCard>

      <DemoCard
        style={{
          padding: 0,
          marginBottom: 10
        }}
      >
        <NoticeBar
          closeMode
          style={{width: 320}}
          rightIcon='circle-close'
          onClick={hello}
        >
            NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
        </NoticeBar>
      </DemoCard>

      <DemoCard
        style={{
          padding: 0
        }}
      >
        <NoticeBar
          style={{width: 320}}
          leftIcon='https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png'
        >
          {/* 京东商城 */}
          {translated['jd']}
        </NoticeBar>
      </DemoCard>

      <DemoCard
        title={translated.multiline}
        style={{
          padding: 0,
          marginBottom: 10
        }}
      >
        <NoticeBar
          scrollable={false}
          style={{width: 320}}
          text='NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
          wrapable
        />

      </DemoCard>

      <DemoCard
        style={{
          padding: 0
        }}
      >
        <NoticeBar
          scrollable
          style={{width: 320}}
          text='NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
          wrapable
        />
      </DemoCard>

      <DemoCard
        title={translated.vertical}
        style={{
          padding: 0,
          marginBottom: 10
        }}
      >
        <NoticeBar
          direction='vertical'
          style={{width: 320}}
          list={horseLamp1}
          speed={10}
          standTime={1000}
          onClick={(e) => {}}
          closeMode
        />

      </DemoCard>

      <DemoCard
        style={{
          padding: 0
        }}
      >
        <NoticeBar
          direction='vertical'
          style={{width: 320}}
          list={horseLamp1}
          speed={10}
          standTime={2000}
          complexAm
        />

      </DemoCard>

      <DemoCard
        // title='自定义滚动内容'
        title={translated.customAm}
        style={{
          padding: 0
        }}
      >

        <NoticeBar
          direction='vertical'
          style={{width: 320}}
          height={50}
          speed={10}
          standTime={1000}
          closeMode
          onClose={() => { console.log('close'); }}
          onClick={(e) => { alert('click'); }}
        >
          {horseLamp1.map((item, index) => {
            return (
              <Text
                style={{ height: 50, lineHeight: 50 }}
                key={index}
              >
                {item}
              </Text>
            );
          })}
        </NoticeBar>

      </DemoCard>

      <DemoCard
        // title='纵向自定义右侧图标'
        title={translated.customRightIcon}
        style={{
          padding: 0
        }}
      >

        <NoticeBar
          direction='vertical'
          style={{width: 320}}
          list={horseLamp1}
          speed={10}
          standTime={1000}
          rightIcon={<Icon name='fabulous' size={16} color='#f0250f' />}
        />

      </DemoCard>
    </DemoPage>
  );
};

export default NoticebarDemo;
