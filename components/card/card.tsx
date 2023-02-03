import React, { FunctionComponent } from 'react';
import { View, Text, Image } from 'react-native';

import Price from '../price';
import Tag from '../tag';
import cardStyles from './styles';
import { useConfig } from '../configprovider';

export interface CardProps {
  imgUrl: string;
  title: string;
  price: string;
  vipPrice: string;
  shopDesc: string;
  delivery: string;
  shopName: string;
  className: string;
  style: any;
  prolistTpl: React.ReactNode;
  shopTagTpl: React.ReactNode;
  originTpl: React.ReactNode;
  footerTpl: React.ReactNode;
}
const defaultProps = {} as CardProps;
export const Card: FunctionComponent<
  Partial<CardProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    imgUrl,
    title,
    price,
    vipPrice,
    shopDesc,
    delivery,
    shopName,
    shopTagTpl,
    originTpl,
    prolistTpl,
    footerTpl,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const { theme } = useConfig();
  const styles = cardStyles(theme);

  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: imgUrl }} />
      </View>

      <View style={styles.rightC}>
        <View style={{width: '100%'}}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            {title}
          </Text>
        </View>
        {prolistTpl}
        <View style={styles.priceC}>
          <Price price={price} />
          {originTpl || <Price style={styles.goldColor} price={vipPrice} />}
        </View>
        <View style={styles.tagC}>
          {shopTagTpl || (
            <>
              <Tag type="danger">{shopDesc}</Tag>
              <Tag style={styles.marL10} plain>
                {delivery}
              </Tag>
            </>
          )}
        </View>
        <View style={styles.shop}>
          <View>
            <Text style={styles.shopTx}>{shopName}</Text>
          </View>
          {footerTpl}
        </View>
      </View>
    </View>
  );
};

Card.defaultProps = defaultProps;
Card.displayName = 'NutCard';
