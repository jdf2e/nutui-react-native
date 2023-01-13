import React, { useEffect, useState } from 'react'
import { nav } from '../../config.json';
import { useLocation } from 'react-router-dom'
import './title.scss'

const Title = () => {
    let location = useLocation()

  
    const getComponentName = () => {
      const s = window.location.hash.split('/')
      const cname = s[s.length - 1].toLowerCase()
      const component: any = {}


      nav.forEach((item: any) => {
        item.packages.forEach((sItem: any) => {
          if (sItem.name.toLowerCase() == cname) {
            component.name = sItem.name
            component.cName = sItem.cName
            return
          }
        })
      })
      return component
    }

    const [componentName, setComponentName] = useState({ name: '', cName: '' })
    useEffect(() => {
      const componentName = getComponentName()
      setComponentName(componentName)
    }, [location])
    return (
      <div className="title">
        {componentName.name}&nbsp;{componentName.cName}
      </div>
    )
}

export default Title
  