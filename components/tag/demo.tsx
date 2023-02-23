import React from 'react';
import Cell from '../cell';
import CellGroup from '../cellgroup';
import Tag from '../tag';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  primary: string;
  success: string;
  danger: string;
  warning: string;
  tag: string;
  bgColor: string;
  color: string;
  hollow: string;
}

const TagDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '基础用法',
      title2: '空心样式',
      title3: '圆角样式',
      title4: '标记样式',
      title5: '可关闭标签',
      title6: '自定义',
      primary: 'primary类型',
      success: 'success类型',
      danger: 'danger类型',
      warning: 'warning类型',
      tag: '标签',
      bgColor: '背景颜色',
      color: '文字颜色',
      hollow: '空心颜色'

    },
    'zh-TW': {
      title1: '基礎用法',
      title2: '空心樣式',
      title3: '圓角樣式',
      title4: '標記樣式',
      title5: '可關閉標籤',
      title6: '自定義',
      primary: 'primary型別',
      success: 'success型別',
      danger: 'danger型別',
      warning: 'warning型別',
      tag: '標籤',
      bgColor: '背景顏色',
      color: '文字顏色',
      hollow: '空心顏色'
    },
    'en-US': {
      title1: 'Basic usage',
      title2: 'Void style',
      title3: 'Fillet style',
      title4: 'Tag Style',
      title5: 'Closeable label',
      title6: 'Custom',
      primary: 'Primary type',
      success: 'Success type',
      danger: 'Danger type',
      warning: 'Warning type',
      tag: 'Label',
      bgColor: 'Background color',
      color: 'Text color',
      hollow: 'Hollow color'

    }
  });

  return (
    <DemoPage>
      <DemoCard
        // title='基本用法'
        title={translated.title1}
      >
        <CellGroup>
          <Cell
            // title='primary类型'
            title={translated.primary}
            linkSlot={
              <Tag
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                type='primary'
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='success类型'
            title={translated.success}
            linkSlot={
              <Tag
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                type='success'
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='danger类型'
            title={translated.danger}
            linkSlot={
              <Tag
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                type='danger'
              >{translated.tag}</Tag>
            }
          />
          <Cell
            // title='warning类型'
            title={translated.warning}
            linkSlot={
              <Tag
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                type='warning'
              >{translated.tag}</Tag>
            }
          />
        </CellGroup>

      </DemoCard>

      <DemoCard
        // title='空心样式'
        title={translated.title2}
      >
        <CellGroup>
          <Cell
            // title='空心样式'
            title={translated.title2}
            linkSlot={
              <Tag
                plain
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='圆角样式'
            title={translated.title3}
            linkSlot={
              <Tag
                round
                type='primary'
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='标记样式'
            title={translated.title4}
            linkSlot={
              <Tag
                mark
                type='primary'
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='可关闭标签'
            title={translated.title5}
            linkSlot={
              <Tag
                closeable
                onClose={() => alert('Tag closed')}
                type='primary'
                style={{
                  width: 45,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />
        </CellGroup>
      </DemoCard>

      <DemoCard
        // title='自定义'
        title={translated.title6}
      >
        <CellGroup>
          <Cell
            // title='背景颜色'
            title={translated.bgColor}
            linkSlot={
              <Tag
                color='#FA685D'
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='文字颜色'
            title={translated.color}
            linkSlot={
              <Tag
                color='#E9E9E9'
                textColor='#999999'
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />

          <Cell
            // title='空心颜色'
            title={translated.hollow}
            linkSlot={
              <Tag
                color='#FA2400'
                plain
                style={{
                  width: 36,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >{translated.tag}</Tag>
            }
          />
        </CellGroup>
      </DemoCard>
    </DemoPage>
  );
};

export default TagDemo;
