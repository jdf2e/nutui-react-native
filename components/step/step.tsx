import React, { FunctionComponent, useContext ,useState} from 'react'
import {
  View,
  Text
} from 'react-native';
import { DataContext } from '../steps/UserContext'
import Icon from '../icon/index'

import { IComponent, ComponentDefaults } from '../utils/typings'
import pt from '../utils/pt'

import { useConfig } from '../configprovider';
import stepStyles from './styles';

export interface StepProps extends IComponent {
  title: string
  content: string
  activeIndex: number
  icon: string
  iconColor: string
  size: string
  className: string,
  isStart:boolean,
  isEnd:boolean,
  style: React.CSSProperties
  renderContent: () => React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  content: '',
  activeIndex: 0,
  icon: '',
  iconColor: '',
  size: '12px',
  isStart:false,
  isEnd:false,
} as StepProps
export const Step: FunctionComponent<
  Partial<StepProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    title,
    content,
    activeIndex,
    icon,
    iconColor,
    size,
    className,
    renderContent,
    iconClassPrefix,
    iconFontClassName,
    isStart,
    isEnd,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }

  const { theme } = useConfig();
  const mStyles = stepStyles(theme);

  const parent: any = useContext(DataContext)
  const [itemWidth, setItemWidth] = useState(0)

  const dot = parent.propSteps.progressDot
  const getCurrentStatus = () => {
    const index = activeIndex
    if (index < +parent.propSteps.current) return 'finish'
    return index === +parent.propSteps.current ? 'process' : 'wait'
  }
  const handleClickStep = () => {
    parent.propSteps?.onClickStep && parent.propSteps?.onClickStep(activeIndex)
    parent.propSteps?.clickStep && parent.propSteps?.clickStep(activeIndex)
  }

  const renderIconClass = () => {
    if (!dot && icon) {
      return 'nut-step-icon is-icon'
    }
    if (!dot && !icon) {
      return 'nut-step-icon is-text'
    }
    return 'nut-step-icon'
  }

  const getDotStyle = ()=>{
    let style;
    switch(getCurrentStatus()){
      case 'finish':
        style = {
          backgroundColor:'#fff',
          borderWidth:0.5,
          borderColor:'#ff2f2c'
        }
        break;
        case 'process':
          style = {
            backgroundColor:'#ff2f2c'
          }
        break;
        case 'wait':
          style = {
            backgroundColor:'#959fb1'
          }
        break;
        default:
          style = {}
          break;
    }
    return style;
  }

  const getDotTxStyle = ()=>{
    let style;
    switch(getCurrentStatus()){
      case 'finish':
        style = {
          color:'#ff2f2c',
        }
        break;
        case 'process':
          style = {
            color:'#fff'
          }
        break;
        case 'wait':
          style = {
            color:'rgba(0,0,0,0)'
          }
        break;
        default:
          style = {}
          break;
    }
    return style;
  }
  
  const getLeftLineStyle = ()=>{
    let style;
    switch(getCurrentStatus()){
      case 'finish':

        if(isStart){
          style = {
            backgroundColor:'rgba(0,0,0,0)'
          }
        }else{
          style = {
            backgroundColor:'#ff2f2c'
          }
        }
        break;
        case 'process':
          if(isStart){
            style = {
              backgroundColor:'rgba(0,0,0,0)'
            }
          }else{
            style = {
              backgroundColor:'#ff2f2c'
            }
          }       
        break;
        case 'wait':
          if(isStart){
            style = {
              backgroundColor:'rgba(0,0,0,0)'
            }
          }else{
            style = {
              backgroundColor:'#959fb1'
            }
          }  
        break;
        default:
          style = {}
          break;
    }
    return style;
  }

  const getRightLineStyle = ()=>{
    let style;
    switch(getCurrentStatus()){
      case 'finish':
        if(isEnd){
          style = {
            backgroundColor:'rgba(0,0,0,0)'
          }
        }else{
          style = {
            backgroundColor:'#ff2f2c'
          }
        }
        break;
        case 'process':
          if(isEnd){
            style = {
              backgroundColor:'rgba(0,0,0,0)'
            }
          }else{
            style = {
              backgroundColor:'#959fb1'
            }
          }       
        break;
        case 'wait':
          if(isEnd){
            style = {
              backgroundColor:'rgba(0,0,0,0)'
            }
          }else{
            style = {
              backgroundColor:'#959fb1'
            }
          }  
        break;
        default:
          style = {}
          break;
    }
    return style;
  }

  const getTitleTxStyle = ()=>{
    let style;
    switch(getCurrentStatus()){
      case 'finish':
      case 'process':
          style = {
            color:'#ff2f2c'
          }
        break;
        case 'wait':
          style = {
            color:'#959fb1'
          }
        break;
        default:
          style = {}
          break;
    }
    return style;
  }
  
  const getContentTxStyle = ()=>{
    let style;
    switch(getCurrentStatus()){
      case 'finish':
      case 'process':
          style = {
            color:'#000'
          }
        break;
        case 'wait':
          style = {
            color:'#959fb1'
          }
        break;
        default:
          style = {}
          break;
    }
    return style;
  }

  const getDotView=()=>{
    let dotView;
    switch(getCurrentStatus()){
      case 'finish':
        dotView = <View style={{height:pt(20),width:pt(20),borderRadius:pt(10),
          marginVertical:parent.propSteps.direction === 'horizontal' ? pt(20) : 0,
          marginHorizontal:parent.propSteps.direction === 'horizontal' ?  0 : pt(20),
          backgroundColor:'#ff2f2c'}}/>
        break;
        case 'process':
          dotView = <View style={{height:pt(40),width:pt(40),borderRadius:pt(20),
          marginVertical:parent.propSteps.direction === 'horizontal' ? pt(10) : 0,
          marginHorizontal:parent.propSteps.direction === 'horizontal' ?  0 : pt(10),
          backgroundColor:'rgba(255,47,44,0.3)',alignItems:'center',justifyContent:'center'}}>
            <View style={{height:pt(20),width:pt(20),borderRadius:pt(10),backgroundColor:'#ff2f2c'}}/>
          </View>
        break;
        case 'wait':
          dotView = <View style={{height:pt(20),width:pt(20),borderRadius:pt(10),
            marginVertical:parent.propSteps.direction === 'horizontal' ? pt(20) : 0,
            marginHorizontal:parent.propSteps.direction === 'horizontal' ?  0 : pt(20),
            backgroundColor:'#959fb1'}}/>
        break;
        default:
          dotView = null;
          break;
    }
    return dotView;
  }
  
  if(parent.propSteps.direction === 'horizontal'){
    return (
      <View 
      style={{flex:1}}
      onLayout={(e) => {
        const contentWidth = e.nativeEvent.layout.width;
        if(itemWidth===0){
          setItemWidth(contentWidth);
        }
    }}
      {...restProps} onClick={handleClickStep}>
        <View 
        style={mStyles.nut_step_center}>
          <View style={{width: itemWidth,...mStyles.nut_step_h_left}}>
            <View style={[mStyles.nut_step_line,getLeftLineStyle()]}/>
            <View style={[mStyles.nut_step_line,getRightLineStyle()]}/>   
          </View>
          <View >
            {icon ? (
               <View style={[mStyles.nut_step_h_dot,getDotStyle()]}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                className="nut-step-icon-inner"
                color={iconColor}
                name={icon}
                size={size}
              />
              </View>
            ) : (
              !dot ? 
              <View style={[mStyles.nut_step_h_dot,getDotStyle()]}>
                <Text style={[mStyles.nut_step_text_size,getDotTxStyle()]}>{activeIndex}</Text>
              </View>
              :
                getDotView()
            )}
          </View>
        </View>
  
        <View style={mStyles.nut_step_h_content}>
          <Text style={[mStyles.nut_step_text_size,getTitleTxStyle()]}>{title}</Text>
          {content ? <Text style={[{fontSize:pt(30),marginTop:pt(20)},getContentTxStyle()]}>{content}</Text> : null}
          {renderContent && renderContent()}
        </View>
  
      </View>
    )
  }else {
    return (
    <View 
    style={mStyles.nut_step_v_container}
    {...restProps} onClick={handleClickStep}>
  <View 
        style={{
          alignItems:'center'
        }}>
          <View >
            {icon ? (
               <View style={[mStyles.nut_step_h_dot,getDotStyle()]}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                className="nut-step-icon-inner"
                color={iconColor}
                name={icon}
                size={size}
              />
              </View>
            ) : (
              !dot ? 
              <View style={[mStyles.nut_step_h_dot,getDotStyle()]}>
                <Text style={[mStyles.nut_step_text_size,getDotTxStyle()]}>{activeIndex}</Text>
              </View>
              :
                getDotView()
            )}
          </View>
          <View style={[{flex:1,width:pt(2)},getRightLineStyle()]}/>
        </View>
        <View style={{
              paddingTop:dot ? 0 : pt(10),
              paddingHorizontal:pt(40)
        }}>
          <Text style={[mStyles.nut_step_text_size,getTitleTxStyle()]}>{title}</Text>
          {content ? <Text style={[mStyles.nut_step_v_text,getContentTxStyle()]}>{content}</Text> : null}
          {renderContent && renderContent()}
        </View>
  </View>)
    }
}

Step.defaultProps = defaultProps
Step.displayName = 'NutStep'
