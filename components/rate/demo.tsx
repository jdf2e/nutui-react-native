import React from 'react'
import Rate from '.';
import Cell from '../cell';
import Toast from '../toast';
import { DemoPage, DemoCard } from '../configprovider/styles/demo.page'

const RateDemo = () => {
  const onChange = (val: any) => {
    Toast.text(`${String(val)}`)
  }
  return (
      <DemoPage >
         <DemoCard title={'基础用法'} padding={0}>
          <Cell>
            <Rate modelValue={3} />
          </Cell>
         </DemoCard>

         <DemoCard title={'半星'} padding={0}>
          <Cell>
              <Rate
                allowHalf
                modelValue="3.5"
                onChange={(num) => console.log('allowHalf count', num)}
              />
          </Cell>
         </DemoCard>

         <DemoCard title={'自定义 icon'} padding={0}>
            <Cell>
                <Rate
                  checkedIcon="heart-fill1"
                  uncheckedIcon="heart"
                  modelValue="3"
                  onChange={(num) => console.log('coustom icon count', num)}
                />
            </Cell>
         </DemoCard>

         <DemoCard title={'自定义数量'} padding={0}>
            <Cell>
                <Rate count="6" modelValue="3" />
            </Cell>
         </DemoCard>

         <DemoCard title={'最少选中数量（支持半星）'} padding={0}>
            <Cell>
              <Rate
                modelValue="2"
                minimizeValue={3}
                onChange={(num) => console.log(num)}
              />
            </Cell>
         </DemoCard>

         <DemoCard title={'禁用状态'} padding={0}>
            <Cell>
              <Rate disabled modelValue="3" />
            </Cell>
         </DemoCard>

         <DemoCard title={'只读状态'} padding={0}>
            <Cell>
              <Rate modelValue="3" readonly />
            </Cell>
         </DemoCard>

         <DemoCard title={'绑定事件'} padding={0}>
            <Cell>
              <Rate modelValue="3" onChange={onChange} />
            </Cell>
         </DemoCard>

         <DemoCard title={'自定义尺寸 35px'} padding={0}>
            <Cell>
                <Rate modelValue="3" iconSize="35" />
            </Cell>
         </DemoCard>
      </DemoPage>
  )
}

export default RateDemo
