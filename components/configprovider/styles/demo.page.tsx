import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DiviceWidth, DiviceHeight, StatusBarHeight } from '../../utils';

export const DemoPage = ({ children }: { children: any }) => {
  return <View style={PageStyles.page}>{children}</View>;
};

export const DemoCard = ({
  title,
  subTitle,
  children
}: {
  title: string;
  subTitle?: string;
  children: any;
}) => {
  return (
    <>
      <Text style={PageStyles.title}>
        {title}
        {subTitle && <Text style={PageStyles.subTitle}>{`(${subTitle})`}</Text>}
      </Text>
      <View style={PageStyles.card}>{children}</View>
    </>
  );
};

export const PageStyles = StyleSheet.create({
  page: {
    width: DiviceWidth,
    minHeight: DiviceHeight - StatusBarHeight,
    paddingTop: 20,
    backgroundColor: '#f7f7f7'
  },
  title: {
    marginBottom: 10,
    marginLeft: 20
  },
  subTitle: {
    fontSize: 12,
    paddingLeft: 10
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    width: DiviceWidth - 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 20,
    padding: 10
  }
});
