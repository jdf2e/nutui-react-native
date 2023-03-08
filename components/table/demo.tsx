import React, {
  useState
} from 'react';
import {
  Text
} from 'react-native';
import Table from '../table';
import Button from '../button';
import Toast from '../toast';
import Icon from '../icon';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page';
import { useTranslate } from '../utils';

interface T {
  basic: string;
  borderedAndAlign: string;
  summaryTitle: string;
  summary: string;
  striped: string;
  noDataTitle: string;
  customNoData: string;
  customCell: string;
  asynchronousRendering: string;
  sorting: string;
}

const TableDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      borderedAndAlign: '是否显示边框，文字对齐',
      summaryTitle: '显示总结栏',
      summary: '这是总结栏',
      striped: '条纹、明暗交替',
      noDataTitle: '无数据默认展示，支持自定义',
      customNoData: '这里是自定义展示',
      customCell: '自定义单元格',
      asynchronousRendering: '支持异步渲染(5s之后看效果)',
      sorting: '支持排序'
    },
    'en-US': {
      basic: 'Basic usage',
      borderedAndAlign: 'Whether to display border and align text',
      summaryTitle: 'Show summary bar',
      summary: 'This is the summary column',
      striped: 'Stripes, alternating light and shade',
      noDataTitle:
            'No data is displayed by default, and customization is supported',
      customNoData: 'Here is the custom display',
      customCell: 'Custom cell',
      asynchronousRendering:
            'Support asynchronous rendering(See the effect after 5S)',
      sorting: 'Support sorting'
    }
  });

  const [columns1, setColumns1] = useState([
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '性别',
      key: 'sex',
      render: (record: any) => {
        return (
          <Text style={{ color: record.sex === '女' ? 'blue' : 'green' }}>
            {record.sex}
          </Text>
        );
      }
    },
    {
      title: '学历',
      key: 'record'
    }
  ]);

  const [columns2, setColumns2] = useState([
    {
      title: '姓名',
      key: 'name',
      align: 'center'
    },
    {
      title: '性别',
      key: 'sex'
    },
    {
      title: '学历',
      key: 'record'
    }
  ]);

  const [columns4, setColumns4] = useState([
    {
      title: '姓名',
      key: 'name',
      align: 'center'
    },
    {
      title: '性别',
      key: 'sex'
    },
    {
      title: '学历',
      key: 'record'
    },
    {
      title: '操作',
      key: 'render'
    }
  ]);

  const [columns5] = useState([
    {
      title: '姓名',
      key: 'name',
      align: 'center',
      sorter: true
    },
    {
      title: '性别',
      key: 'sex'
    },
    {
      title: '学历',
      key: 'record'
    },
    {
      title: '年龄',
      key: 'age',
      sorter: true
    }
  ]);

  const [data1, setData1] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学'
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科'
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中'
    }
  ]);

  const [data4, setData4] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      render: () => {
        return (
          <Button
            onClick={() => Toast.text('hello')}
            size='small'
            type='primary'
          >
            Hello
          </Button>
        );
      }
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      render: () => {
        return <Icon name='dongdong' size={14} />;
      }
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      render: () => {
        return (
          <Button
            type='success'
            size='small'
            onClick={() => {}}
          >
            跳转到京东
          </Button>
        );
      }
    }
  ]);

  const [data5] = useState([
    {
      name: 'Tom',
      sex: '男',
      record: '小学',
      age: 10
    },
    {
      name: 'Lucy',
      sex: '女',
      record: '本科',
      age: 30
    },
    {
      name: 'Jack',
      sex: '男',
      record: '高中',
      age: 4
    }
  ]);

  return (
    <DemoPage>
      <DemoCard
        title={translated.basic}
        style={{
          padding: 0
        }}
      >
        <Table columns={columns1} data={data1} />
      </DemoCard>

      <DemoCard
        title={translated.borderedAndAlign}
        style={{
          padding: 0
        }}
      >

        <Table
          columns={columns2}
          data={data1}
          bordered={false}
        />

      </DemoCard>
      <DemoCard
        title={translated.summaryTitle}
        style={{
          padding: 0
        }}
      >
        <Table
          columns={columns1}
          data={data1}
          summary='这是总结栏'
        />
      </DemoCard>

      <DemoCard
        title={translated.striped}
        style={{
          padding: 0
        }}
      >

        <Table
          columns={columns1}
          data={data1}
          striped
        />
      </DemoCard>

      <DemoCard
        title={translated.noDataTitle}
        style={{
          padding: 0
        }}
      >
        <Table
          columns={columns1}
          data={[]}
          noData='这里是自定义展示'
        />
      </DemoCard>
      <DemoCard
        title={translated.customCell}
        style={{
          padding: 0
        }}
      >
        <Table columns={columns4} data={data4} />
      </DemoCard>
      <DemoCard
        title={translated.sorting}
        style={{
          padding: 0
        }}
      >
        <Table
          columns={columns5}
          data={data5}
          onSorter={(item, data) => {
            alert(JSON.stringify(item));
          }}
        />
      </DemoCard>

    </DemoPage>
  );
};

export default TableDemo;
