import React, {
  FunctionComponent,
  useEffect,
  useState
} from 'react';

import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet
} from 'react-native';
import Icon from '../icon';
import fConStyle from '../utils/filter-container-style';
import toObj from '../utils/style-to-obj';
import pt from '../utils/pt';
import px from '../utils/px';
import { useConfig } from '../configprovider';
import tableStyles from './styles';

export interface TableColumnProps {
  key: string;
  title?: string;
  align?: string;
  sorter?: ((a: any, b: any) => number) | boolean | string;
  render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode;
}

export interface BasicTableProps {
  style: StyleProp<ViewStyle>;
  columns: TableColumnProps[];
  data: any[];
  bordered: boolean;
  summary?: React.ReactNode;
  striped?: boolean;
  noData?: React.ReactNode;
  onSorter?: (item: TableColumnProps, data: any[]) => void;
}

export type TableProps = BasicTableProps;

const defaultProps = {
  style: {},
  columns: [],
  data: [],
  bordered: true,
  striped: false,
  noData: '暂无数据'
} as TableProps;

export const Table: FunctionComponent<
Partial<TableProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale, theme } = useConfig();
  const styles = tableStyles(theme);

  defaultProps.noData = locale.noData;

  const {
    style,
    columns,
    data,
    bordered,
    summary,
    striped,
    noData,
    onSorter
  } = {
    ...defaultProps,
    ...props
  };

  const [curData, setCurData] = useState(data);

  useEffect(() => {
    if (data && String(data) !== String(curData)) {
      setCurData(data);
    }
  }, [data]);

  const handleSorterClick = (item: TableColumnProps) => {
    if (item.sorter) {
      onSorter && onSorter(item, curData);

      if (typeof item.sorter === 'function') {
        setCurData(curData.sort(item.sorter as (a: any, b: any) => number));
      } else {
        setCurData(item.sorter === 'default' ? curData.sort() : curData);
      }
    }
  };

  const cellClasses = (item: TableColumnProps) => {
    return [
      props.bordered ? styles.trBorder : {},
      item.align ? styles[`trAlign${item.align}`] : {}
    ];
  };

  const getColumnItem = (value: string): TableColumnProps => {
    return columns.filter((item: TableColumnProps) => item.key === value)[0];
  };

  const renderHeadCells = () => {
    return columns.map((item, index) => {
      return (
        <View
          style={[
            styles.mainHeadTh,
            ...cellClasses(item),
            index === columns.length - 1 && bordered ? styles.rightBorder : {}
          ]}
          key={item.key}
          onTouchStart={() => {
            if (item.sorter) {
              handleSorterClick(item);
            }
          }}
        >
          <Text
            style={styles.title}
          >{item.title}</Text>
          {item.sorter
            ? (
              <Icon
                name='down-arrow'
                size={12}
              />
            )
            : null}
        </View>
      );
    });
  };

  const sortDataItem = () => {
    return columns.map((columns: any) => {
      return [columns.key, columns.render];
    });
  };

  const renderBodyTds = (item: any) => {
    return sortDataItem().map(([value, render], index) => {
      return (
        <View
          style={[
            styles.trtd,
            ...cellClasses(getColumnItem(value)),
            index === sortDataItem().length - 1 && bordered ? styles.rightBorder : {}
          ]}
          key={value}
        >
          {typeof item[value] === 'function' || typeof render === 'function'
            ? (
              render ? render(item) : item[value](item)
            )
            : (
              <Text>{item[value]}</Text>
            )}
        </View>
      );
    });
  };

  const renderBoyTrs = () => {
    return curData?.map((item, index) => {
      return (
        <View
          style={[
            styles.mainBodyTr,
            index % 2 === 1 && striped ? { backgroundColor: '#f4f4f4' } : {}
          ]}
          key={index}
        >
          {renderBodyTds(item)}
        </View>
      );
    });
  };

  const wrapStyle = [
    styles.container,
    bordered ? styles.tableBorder : {},
    fConStyle(toObj(style || {}))
  ];

  const mainStyle = [
    styles.mainStyle,
    striped ? styles.mainStriped : {}
  ];

  return (
    <View
      style={wrapStyle}
    >
      <View
        style={mainStyle}
      >
        <View
          style={styles.mainHead}
        >
          <View
            style={[
              styles.mainHeadTr,
              striped ? { backgroundColor: '#f4f4f4' } : {}
            ]}
          >{renderHeadCells()}</View>
        </View>
        <View
          style={styles.mainBody}
        >{renderBoyTrs()}</View>
      </View>
      {summary
        ? (
          <View
            style={styles.summary}
          >
            <Text
              style={styles.summaryText}
            >{summary}</Text>
          </View>
        )
        : null}
      {curData.length === 0
        ? (

          <View
            style={styles.nodata}
          >
            <Text
              style={styles.nodataText}
            >{noData}</Text>
          </View>

        )
        : null}
    </View>
  );
};

Table.defaultProps = defaultProps;
Table.displayName = 'NutTable';
