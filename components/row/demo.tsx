import React from 'react';
import { useTranslate } from '../utils';
import { View, Text, StyleSheet } from 'react-native';
import Row from '.';
import Col from '../col';
import { DemoCard, DemoPage } from '../configprovider/styles/demo.page';
type TLayoutDemo = {
  title1: string;
  title2: string;
  title3: string;
};

const LayoutDemo = () => {
  const [translated] = useTranslate<TLayoutDemo>({
    'zh-CN': {
      title1: '基础布局',
      title2: '分栏间隔',
      title3: 'Flex布局',
    },
    'zh-TW': {
      title1: '基礎佈局',
      title2: '分欄間隔',
      title3: 'Flex佈局',
    },
    'en-US': {
      title1: 'Basic layout',
      title2: 'column interval',
      title3: 'Flex layout',
    },
    'id-ID': {
      title1: 'Tata letak dasar',
      title2: 'interval kolom',
      title3: 'Tata letak fleksibel',
    },
  });
  return (
    <DemoPage>
      <DemoCard title="基础布局" padding={0} flexDirection="column" backgroundColor='rgba(0, 0, 0, 0)' marginLeft={0}>
        <Row>
          <Col span="24">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:24</Text>
            </View>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:12</Text>
            </View>
          </Col>
          <Col span="12">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:12</Text>
            </View>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:8</Text>
            </View>
          </Col>
          <Col span="8">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:8</Text>
            </View>
          </Col>
          <Col span="8">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:8</Text>
            </View>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
        </Row>
      </DemoCard>
      <DemoCard title="分栏间隔" padding={0} flexDirection="column" backgroundColor='rgba(0, 0, 0, 0)' marginLeft={0}>
        <Row gutter="10">
          <Col span="8">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:8</Text>
            </View>
          </Col>
          <Col span="8">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:8</Text>
            </View>
          </Col>
          <Col span="8">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:8</Text>
            </View>
          </Col>
        </Row>
      </DemoCard>
      <DemoCard title="Flex布局" padding={0} flexDirection="column" backgroundColor='rgba(0, 0, 0, 0)' marginLeft={0}>
        <Row type={'flex'} justify="start" align="space-around">
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
        </Row>

        <Row type={'flex'} justify="center" align="space-around">
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
        </Row>

        <Row type={'flex'} justify="end" align="space-around">
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
        </Row>

        <Row type={'flex'} justify="space-between" align="space-around">
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
        </Row>
        <Row type={'flex'} justify="space-around" align="space-around">
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.itemsPink}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
          <Col span="6">
            <View style={styles.items}>
              <Text style={styles.itemsTx}>span:6</Text>
            </View>
          </Col>
        </Row>
      </DemoCard>
    </DemoPage>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: '#f98883',
    height: 40,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  itemsPink: {
    backgroundColor: '#fcc7c5',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemsTop: {
    width: '100%',
    height: 40,
    marginLeft: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  itemsTx: {
    color: '#fff',
    fontSize: 16,
  },

  itemsTxTop: {
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },
});

export default LayoutDemo;
