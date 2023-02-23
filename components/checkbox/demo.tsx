import React, {
  useState,
  useRef
} from 'react';
import {
  View
} from 'react-native';
import { useTranslate } from '../utils';
import Checkbox from '../checkbox';
import Button from '../button';
import Toast from '../toast';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';

interface T {
  '74fc5d8a': string;
  '48b50759': string;
  '7db1a8b2': string;
  f3480b64: string;
  f3480b646: string;
  f4e46058: string;
  '8a2e2847': string;
  '70ffa5d8': string;
  '87941cd4': string;
  '45c21a9e': string;
  '2cd0f3be': string;
  '2cd0f3be1': string;
  b2dd27e8: string;
  '4584d5bf': string;
  '7df5c456': string;
  '77fc8365': string;
  '3a5040b6': string;
  f4d4bae5: string;
}

const CheckboxDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基本用法',
      '48b50759': '复选框',
      '7db1a8b2': '禁用状态',
      f3480b64: '未选时禁用状态',
      f3480b646: '半选状态',
      f4e46058: '选中时禁用状态',
      '8a2e2847': '自定义尺寸',
      '70ffa5d8': '自定义图标',
      '87941cd4': '点击触发事件',
      '45c21a9e': '选中',
      '2cd0f3be': '取消',
      b2dd27e8: '您选中了x',
      '4584d5bf': '组合复选框',
      '7df5c456': '禁用',
      '77fc8365': '全选和取消',
      '3a5040b6': '全选',
      f4d4bae5: '取消全选',
      '2cd0f3be1': '反选'
    },
    'zh-TW': {
      '74fc5d8a': '基本用法',
      '48b50759': '複選框',
      '7db1a8b2': '禁用狀態',
      f3480b64: '未選時禁用狀態',
      f3480b646: '半选状态',
      f4e46058: '選中時禁用狀態',
      '8a2e2847': '自定義尺寸',
      '70ffa5d8': '自定義圖示',
      '87941cd4': '點擊觸發事件',
      '45c21a9e': '選中',
      '2cd0f3be': '取消',
      b2dd27e8: '您選取了x',
      '4584d5bf': '組合複選框',
      '7df5c456': '禁用',
      '77fc8365': '全選和取消',
      '3a5040b6': '全選',
      f4d4bae5: '取消全選',
      '2cd0f3be1': '反選'
    },
    'en-US': {
      '74fc5d8a': 'Basic Usage',
      '48b50759': 'Checkbox',
      '7db1a8b2': 'Disabled State',
      f3480b64: 'Disabled state',
      f3480b646: 'Semi selective',
      f4e46058: 'Disabled state',
      '8a2e2847': 'Custom size',
      '70ffa5d8': 'Custom Icon',
      '87941cd4': 'Click Trigger Event',
      '45c21a9e': 'Checked',
      '2cd0f3be': 'Cancel',
      b2dd27e8: 'You selected x',
      '4584d5bf': 'Combination Checkbox',
      '7df5c456': 'Disabled',
      '77fc8365': 'All Select and Cancel',
      '3a5040b6': 'Select All',
      '2cd0f3be1': 'reverse',
      f4d4bae5: 'Cancel All Selection'
    }
  });
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1']);
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1']);
  const [checkboxgroup4, setCheckboxgroup4] = useState(['1']);
  const checkboxgroup2Ref = useRef(null);
  const [indeterminate, setIndeterminate] = useState(false);
  const checkboxgroup3Ref = useRef(null);
  const [checkboxgroup5] = useState(['1']);

  return (
    <DemoPage>
      {/* 基本用法 */}
      <DemoCard
        title={translated['74fc5d8a']}
        style={{
          marginBottom: 10
        }}
      >

        <Checkbox
          textPosition='left'
          // 复选框
          label={translated['48b50759']}
          checked={checked1}
          onChange={(value) => {
            setChecked1(value);
          }}
        />
      </DemoCard>
      <DemoCard>
        <Checkbox
          textPosition='right'
          label={translated['48b50759']}
          checked={checked2}
          onChange={(value) => {
            setChecked2(value);
          }}
        />
      </DemoCard>

      <DemoCard
      // 禁用状态
        title={translated['7db1a8b2']}
        style={{
          marginBottom: 10
        }}
      >

        <Checkbox
          textPosition='right'
          // 未选时禁用状态
          label={translated.f3480b64}
          checked={false}
          disabled
        />
      </DemoCard>

      <DemoCard>
        <Checkbox
          textPosition='right'
          // 选中时禁用状态
          label={translated.f4e46058}
          checked
          disabled
        />
      </DemoCard>

      <DemoCard
        // 自定义尺寸
        title={translated['8a2e2847']}
        style={{
          marginBottom: 10
        }}
      >

        <Checkbox
          // label='自定义尺寸25'
          label={`${translated['8a2e2847']}25`}
          iconSize={25}
          checked={checked3}
          onChange={(value) => {
            setChecked3(value);
          }}
        />

      </DemoCard>

      <DemoCard>
        <Checkbox
          // label='自定义尺寸10'
          label={`${translated['8a2e2847']}10`}
          iconSize={10}
          checked={checked4}
          onChange={(value) => {
            setChecked4(value);
          }}
        />
      </DemoCard>
      {/* 自定义图标 */}
      <DemoCard title={translated['70ffa5d8']}>

        <Checkbox
          iconName='checklist'
          iconActiveName='checklist'
          checked={checked5}
          onChange={(value) => {
            setChecked5(value);
          }}
        >
          {translated['70ffa5d8']}
        </Checkbox>
      </DemoCard>

      {/* 点击触发事件 */}
      <DemoCard title={translated['87941cd4']}>

        <Checkbox
          checked={false}
          onChange={(state, label) => {
            Toast.text(`您${state ? '选中' : '取消'}了${label}`);
          }}
        >
          {translated['87941cd4']}
        </Checkbox>

      </DemoCard>

      <DemoCard
        title='Checkbox.Group'
      >
        <Checkbox.Group
          checkedValue={checkboxgroup1}
          onChange={(value) => {
            setCheckboxgroup1(value);
          }}
          style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap',
            width: 300
          }}
        >
          <Checkbox
            checked={false}
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
            label='1'
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
            label='2'
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            style={{
              marginRight: 20
            }}
            label='3'
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            checked={false}
            style={{
              marginRight: 20
            }}
            label='4'
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
        </Checkbox.Group>
      </DemoCard>

      {/* 禁用 */}
      <DemoCard
        title={translated['7df5c456']}
      >
        <Checkbox.Group
          checkedValue={checkboxgroup2}
          style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap',
            width: 300
          }}
          disabled
        >
          <Checkbox
            label='1'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            label='2'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            label='3'
            style={{ marginRight: 20 }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            label='4'
            style={{ marginRight: 20 }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
        </Checkbox.Group>

      </DemoCard>

      {/* 全选和取消 */}
      <DemoCard
        title={translated['77fc8365']}
        style={{
          marginBottom: 10
        }}
      >
        <Checkbox.Group
          ref={checkboxgroup2Ref}
          checkedValue={checkboxgroup2}
          style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap',
            width: 300
          }}
          onChange={(value) => {
            //   Toast.text(`${value.length === 4 ? '全选' : '取消全选'}`);
            Toast.text(`${value.length === 4 ? translated['3a5040b6'] : translated.f4d4bae5}`);
          }}
        >
          <Checkbox
            checked={false}
            label='1'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            checked={false}
            label='2'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            checked={false}
            label='3'
            style={{
              marginRight: 20
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            checked={false}
            label='4'
            style={{
              marginRight: 20
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
        </Checkbox.Group>

      </DemoCard>

      <DemoCard>
        <View
          style={{ flexDirection: 'row' }}
        >
          <Button
            type='primary'
            style={{ marginRight: 10 }}
            onPress={() => {
              checkboxgroup2Ref.current.toggleAll(true);
            }}
          >
            {/* 全选 */}
            {translated['3a5040b6']}
          </Button>
          <Button
            type='info'
            style={{ marginRight: 10 }}
            onPress={() => {
              (checkboxgroup2Ref.current).toggleAll(false);
            }}
          >
            {/* 取消 */}
            {translated['2cd0f3be']}
          </Button>
          <Button
            type='warning'
            onPress={() => {
              (checkboxgroup2Ref.current).toggleReverse();
            }}
          >
            {/* 反选 */}
            {translated['2cd0f3be1']}
          </Button>
        </View>
      </DemoCard>

      <DemoCard
        title='checkboxGroup使用，限制最大可选数（2个）'
      >
        <Checkbox.Group
          checkedValue={checkboxgroup4}
          max={2}
          onChange={(value) => {
            Toast.text(value);
          }}
          style={{ 
            flexDirection: 'row', 
            flexWrap: 'wrap',
            width: 300
          }}
        >
          <Checkbox
            checked={false}
            label='1'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            label='2'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            label='3'
            style={{
              marginRight: 20
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            label='4'
            style={{
              marginRight: 20
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
        </Checkbox.Group>

      </DemoCard>

      <DemoCard
        title='全选/半选/取消'
      >

        <Checkbox
          checked={checked6}
          indeterminate={indeterminate}
          style={{
            marginBottom: 10
          }}
          onChange={(state, label) => {
            if (state) {
              setIndeterminate(false);
            }
            setChecked6(state);
            (checkboxgroup3Ref.current).toggleAll(state);
          }}
        >
          {/* 全选 */}
          {translated['3a5040b6']}
        </Checkbox>

        <Checkbox.Group
          ref={checkboxgroup3Ref}
          checkedValue={checkboxgroup5}
          style={{ 
              flexDirection: 'row', 
              flexWrap: 'wrap',
              width: 300
          }}
          onChange={(value) => {
            if (value.length === 4) {
              setIndeterminate(false);
              setChecked6(true);
            } else if (value.length && value.length < 4) {
              setIndeterminate(true);
              setChecked6(true);
            } else {
              setChecked6(false);
            }
          }}
        >
          <Checkbox
            checked={false}
            label='1'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            label='2'
            style={{
              marginRight: 20,
              marginBottom: 10
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>

          <Checkbox
            checked={false}
            label='3'
            style={{
              marginRight: 20
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
          <Checkbox
            checked={false}
            label='4'
            style={{
              marginRight: 20
            }}
          >
            {/* 组合复选框 */}
            {translated['4584d5bf']}
          </Checkbox>
        </Checkbox.Group>

      </DemoCard>
    </DemoPage>
  );
};

export default CheckboxDemo;
