import React, { FunctionComponent } from 'react'
import {
    Text,
  } from 'react-native';

  export type Direction = 'start' | 'end' | 'middle'
  type EllipsisedValue = {
    leading?: string | undefined
    tailing?: string | undefined
  }
  
  export interface EllipsisProps {
    content: string
    direction: string
    rows: number | string
    expandText: string
    collapseText: string
    symbol: string
    lineHeight: number | string
    onClick: () => void
    onChange: (type: string) => void,
    style: React.CSSProperties
  }
  const defaultProps = {
    content: '',
    direction: '',
    rows: 1,
    expandText: '',
    collapseText: '',
    symbol: '...',
    lineHeight: '',
    style:{}
  } as EllipsisProps
  export const Ellipsis: FunctionComponent<
    Partial<EllipsisProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>
  > = (props) => {
    
    const {
      children,
      content,
      direction,
      rows,
      expandText,
      collapseText,
      symbol,
      lineHeight,
      onClick,
      onChange,
      style
    } = { ...defaultProps, ...props }

    const getEllipsizeMode =()=>{
        let mode = 'clip';
        switch (direction){
            case 'start':
                mode = 'head'
            break; 
            case 'end':
                mode = 'tail'
            break; 
            case 'middle':
                mode = 'middle'
            break; 
            default:
                mode ='clip'
                break;
        }

        return mode;

    }
    return (
        <Text 
          style={[lineHeight ? { lineHeight:lineHeight}: {},style ]}
          numberOfLines={parseInt(rows)}
          ellipsizeMode={getEllipsizeMode()}
        >
          {content}
        </Text>
    )
  }
  
  Ellipsis.defaultProps = defaultProps
  Ellipsis.displayName = 'NutEllipsis'