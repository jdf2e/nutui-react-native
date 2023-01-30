import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'nutui-rn/icon';
import pt from 'nutui-rn/utils/pt';
import { CategoryList, DemoList } from '../demoList';

const Home = (props: any) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.brand}>
          <Icon
            name="https://img12.360buyimg.com/imagetools/jfs/t1/123397/23/33640/14811/6393fa43Ee7364f67/2d0317b8a5efb087.png"
            size="80"
          />
          <View style={styles.brandInfo}>
            <Text style={styles.brandTitle}>NutUI</Text>
            <Text style={styles.brandDescription}>
              京东风格的React Native移动端组件库
            </Text>
          </View>
        </View>
        <View style={styles.categoryList}>
          {CategoryList.map((category) => {
            return (
              <View key={category.title} style={styles.category}>
                <Text style={styles.categoryTitle}>
                  {`${category.title} ${category.description}`}
                </Text>
                {DemoList.filter((demo) => demo.type === category.title).map(
                  (demo) => (
                    <TouchableOpacity
                      key={demo.title}
                      onPress={() => {
                        navigate(demo.title);
                      }}
                    >
                      <View style={styles.demo}>
                        <Text>{`${demo.title} ${demo.description}`}</Text>
                        <Icon name="right" size="12" />
                      </View>
                    </TouchableOpacity>
                  )
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: pt(750),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  brand: {
    width: pt(750),
    marginVertical: pt(30),
    flexDirection: 'row',
    paddingLeft: pt(20),
  },
  brandInfo: {
    justifyContent: 'center',
    marginLeft: pt(20),
  },
  brandTitle: { color: '#000', fontSize: pt(50) },
  brandDescription: { color: 'grey', fontSize: pt(22), marginTop: pt(10) },
  categoryList: {
    backgroundColor: '#f7f8fa',
    paddingBottom: pt(40),
  },
  category: {
    width: pt(750),
    paddingTop: pt(40),
  },
  categoryTitle: {
    color: '#9ba5ab',
    fontSize: pt(24),
    marginLeft: pt(40),
  },
  demo: {
    width: pt(670),
    marginLeft: pt(40),
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Home;
