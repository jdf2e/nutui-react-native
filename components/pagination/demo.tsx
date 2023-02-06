import React, { useState } from 'react'
import { useTranslate } from '../utils';
import { View, Text,StyleSheet } from 'react-native';
import Pagination from '.';
import Icon from '../icon';
import deviceWidth from '../utils/deviceWidth';
import { DemoPage } from '../configprovider/styles/demo.page'

interface T {
  ce5c5446: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
}

const PaginationDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '简单模式',
      b840c88f: '显示省略号',
      a74a1fd4: '自定义按钮',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '簡單模式',
      b840c88f: '顯示省略號',
      a74a1fd4: '自定義按鈕',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ef: 'Simple mode',
      b840c88f: 'Show ellipsis',
      a74a1fd4: 'Custom button',
    },
  })
  const [currentPage1, setCurrent1] = useState(1)
  const [currentPage2, setCurrent2] = useState(1)
  const [currentPage3, setCurrent3] = useState(1)
  const [currentPage4, setCurrent4] = useState(3)
  const pageChange1 = (v: any) => {
    const c = v
    setCurrent1(c)
  }
  const pageChange2 = (v: any) => {
    const c = v
    setCurrent2(c)
  }
  const pageChange3 = (v: any) => {
    const c = v
    setCurrent3(c)
  }
  const pageChange4 = (v: any) => {
    const c = v
    setCurrent4(c)
  }
  const pageNodeRender = (item: any) => {
    return  <View><Text>{item.number === 3 ? 'hot' : item.text}</Text></View>;
  }
  return (
    <DemoPage >
       <Text style={styles.itemsTxTop}>{translated.ce5c5446}</Text>

       <View style={styles.items}>
        <Pagination
              modelValue={currentPage1}
              totalItems="25"
              itemsPerPage="5"
              onChange={pageChange1}
            />
        </View>

        <Text style={styles.itemsTxTop}>{translated.c38a08ef}</Text>

        <View style={styles.items}>
            <Pagination
            modelValue={currentPage2}
            pageCount={12}
            mode="simple"
            onChange={pageChange2}
          />
        </View>
         
        <Text style={styles.itemsTxTop}>{translated.b840c88f}</Text>

        <View style={styles.items}>
            <Pagination
              modelValue={currentPage3}
              totalItems="125"
              showPageSize="3"
              forceEllipses
              onChange={pageChange3}
            />
        </View>

        <Text style={styles.itemsTxTop}>{translated.a74a1fd4}</Text>

        <View style={styles.items}>
            <Pagination
                modelValue={currentPage4}
                totalItems="500"
                showPageSize="5"
                onChange={pageChange4}
                prevText={<Icon name="left" />}
                nextText={<Icon name="right" />}
                pageNodeRender={pageNodeRender}
          />
        </View>

    </DemoPage>
  )
}

const styles = StyleSheet.create({
  items:{
    width: deviceWidth,
    height: 60, 
    backgroundColor: '#fff', 
    justifyContent: 'center', 
    paddingLeft: 20
  },
  itemsTx: {
      color: '#fff',
      fontSize: 16
  },

  itemsTxTop: {
      marginBottom: 10,
      marginLeft: 20,
      marginTop: 20
  }
});

export default PaginationDemo
