import React, { FunctionComponent } from 'react'

import {
  Text,
  TouchableOpacity
} from 'react-native';

import { useConfig } from '../configprovider';
import timePannelStyles from './styles';

export interface TimePannelProps {
  date: string
  curKey: string | number
  className?: string
  change: (curKey: string | number) => void
}
const defaultProps = {
  className: '',
  date: '',
  curKey: 0,
} as TimePannelProps

export const TimePannel: FunctionComponent<
  Partial<TimePannelProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, className, date, curKey, change } = {
    ...defaultProps,
    ...props,
  }
  const { theme } = useConfig();
  const mStyles = timePannelStyles(theme);

  return (
    <TouchableOpacity 
      style={[
        mStyles.nut_timepannel_container,
        className=='active' ? 
        mStyles.nut_timepannel_active 
        : mStyles.nut_timepannel_no_active
      ]}
    onPress={() => change(curKey)}>
      <Text style={className=='active' ? 
        mStyles.nut_timepannel_active_text
        : mStyles.nut_timepannel_no_active_text}>{date}</Text>
    </TouchableOpacity>
  )
}

TimePannel.defaultProps = defaultProps
TimePannel.displayName = 'NutTimePannel'
