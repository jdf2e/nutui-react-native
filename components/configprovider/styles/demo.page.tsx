import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { DiviceWidth } from '../../utils';

export const DemoPage = ({ children }: { children: any }) => {
  return <ScrollView style={PageStyles.page}>{children}</ScrollView>;
};

export const DemoCard = ({
  title,
  subTitle,
  children,
  flexDirection = 'row',
  backgroundColor = '#fff',
  padding = 10,
  marginLeft = 20,
}: {
  title: string;
  subTitle?: string;
  children: any;
  flexDirection?: 'row' | 'column';
  backgroundColor?: string;
  padding?: number;
  marginLeft?: number;
}) => {
  return (
    <>
      {
        (title || subTitle) && (
          <Text style={PageStyles.title}>
            {title}
            {subTitle && <Text style={PageStyles.subTitle}>{`(${subTitle})`}</Text>}
          </Text>
        )
      }
      <View
        style={[PageStyles.card, { flexDirection, backgroundColor, padding, marginLeft }]}
      >
        {children.length > 0 ? (
          children.map((Component, index) => (
            <View
              key={index}
              style={[
                PageStyles.gap,
                {
                  width: flexDirection === 'column' ? '100%' : 'auto',
                  marginHorizontal: flexDirection === 'column' ? 0 : 5,
                },
              ]}
            >
              {Component}
            </View>
          ))
        ) : (
          <>{children}</>
        )}
      </View>
    </>
  );
};

export const PageStyles = StyleSheet.create({
  page: {
    width: DiviceWidth,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  title: {
    marginBottom: 10,
    marginLeft: 20,
  },
  subTitle: {
    fontSize: 12,
    paddingLeft: 10,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: DiviceWidth - 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
    padding: 10,
  },
  gap: {
    margin: 5,
  },
});
