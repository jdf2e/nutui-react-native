import React, { FunctionComponent } from 'react'
import { View } from 'react-native'
import { DataContext } from './UserContext'
export interface StepsProps {
  current: number
  direction: string
  progressDot: boolean
  className: string
  style: React.CSSProperties
  clickStep: (index: number) => void
  onClickStep: (index: number) => void
}
const defaultProps = {
  current: 0,
  direction: 'horizontal',
  progressDot: false,
} as StepsProps

export const Steps: FunctionComponent<
  Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSteps = { ...defaultProps, ...props }
  const {
    children,
    current,
    direction,
    className,
    progressDot,
    clickStep,
    onClickStep,
    ...restProps
  } = propSteps

  const parentSteps = {
    propSteps,
  }

  return (
    <DataContext.Provider value={parentSteps}>
      <View style={{flex:1,flexDirection: direction == 'horizontal' ? 'row':'column'}}>
        {children}
      </View>
    </DataContext.Provider>
  )
}

Steps.defaultProps = defaultProps
Steps.displayName = 'NutSteps'
