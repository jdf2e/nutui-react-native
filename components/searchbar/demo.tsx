import React, { useState } from 'react'
import { useTranslate } from '../utils';
import { View, Text ,StyleSheet} from 'react-native';
import SearchBar from '.';
import Icon from '../icon';
import { DemoPage } from '../configprovider/styles/demo.page'

type TSearchDemo = {
  basePlaceholder: string
  text: string
  test: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
}
const SearchBarDemo = () => {
  const [translated] = useTranslate<TSearchDemo>({
    'zh-CN': {
      basePlaceholder: '上京东，购好物',
      text: '文本',
      test: '测试',
      title1: '基础用法',
      title2: '搜索框形状及最大长度',
      title3: '搜索框内外背景设置',
      title4: '搜索框文本设置',
      title5: '自定义图标设置',
      title6: '数据改变监听',
    },
    'zh-TW': {
      basePlaceholder: '上京東，購好物',
      text: '文字',
      test: '測試',
      title1: '基礎用法',
      title2: '蒐索框形狀及最大長度',
      title3: '蒐索框內外背景設定',
      title4: '蒐索框文字設定',
      title5: '自定義圖標設定',
      title6: '數據改變監聽',
    },
    'en-US': {
      basePlaceholder: 'Go to jd.com and buy good things',
      text: 'text',
      test: 'test',
      title1: 'basic usage',
      title2: 'search box shape and maximum length',
      title3: 'background settings inside and outside the search box',
      title4: 'search box text settings',
      title5: 'custom icon settings',
      title6: 'data change monitoring',
    },
    'id-ID': {
      basePlaceholder: 'pergi ke jd.com, membeli barang baik',
      text: 'teks',
      test: 'tes',
      title1: 'penggunaan dasar',
      title2: 'bentuk kotak pencarian dan panjang maksimum',
      title3: 'pengaturan latar belakang di dalam dan diluar kotak pencarian',
      title4: 'tetapan teks kotak pencarian',
      title5: 'pengaturan ikon suai',
      title6: 'Monitor perubahan data',
    },
  })

  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }

  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }
  return (
    <>
      <DemoPage>
          <Text style={styles.tx}>{translated.title1}</Text>
          <SearchBar
              placeholder={translated.basePlaceholder}
          />
          <Text style={styles.txTop}>{translated.title2}</Text>
          <SearchBar
              shape="round" maxLength={5}
          />
          <Text style={styles.txTop}>{translated.title3}</Text>
          <SearchBar
              background="red"
              inputBackground="#999"
              align="right"
            />

          <Text style={styles.txTop}>{translated.title4}</Text>
          <SearchBar
            label={translated.text}
            actionText={translated.test}
            onSearch={() => {}}
          />

          <Text style={styles.txTop}>{translated.title5}</Text>
          <SearchBar
            leftoutIcon={<Icon name="heart-fill1" size="14" />}
            rightoutIcon={<Icon name="star-fill" size="14" />}
          />

          <Text style={styles.txTop}>{translated.title6}</Text>
          <SearchBar
            onChange={(val: string, e: Event) => change(val, e)}
            maxLength={10}
          />
           <Text style={{ marginBottom: 10, marginLeft: 20 }}>value:{value}</Text>

      </DemoPage>
    </>
  )
}

const styles = StyleSheet.create({
  tx: {
    marginBottom: 10, 
    marginLeft: 20
  },
  txTop:{
    marginBottom: 10, 
    marginLeft: 20, 
    marginTop: 20
  }
});

export default SearchBarDemo
