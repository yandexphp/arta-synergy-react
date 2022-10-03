import React, { useEffect, useState } from 'react'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/css/uikit.min.css'

import './MultiInput.css'
import { Icon } from '../Icon'

UIkit.use(Icons)

export interface ITag {
  key: string
  value: string
}

export type Props = {
  values: ITag[]
  buttonIcon?: string
  buttonHandler?: () => void
  tagRemoveHandler?: (tag: ITag) => void
  placeholder?: string
  multi?: boolean
}

export const MultiInput: React.FC<Props> = (props) => {
  const {values: initialValues, placeholder, multi: isMulti, buttonIcon, buttonHandler, tagRemoveHandler} = props
  const [tagsValues, setTagsValues] = useState<ITag[]>([])
  const [disabled] = useState<boolean>(true)

  useEffect(() => {
      setTagsValues(!isMulti ? [...initialValues] : initialValues.length ? [initialValues[0]] : [])
  }, [initialValues, isMulti])

  // const handleKeyDown = (e: any) => {
  //     if(e.key !== 'Enter') return
  //     const value = e.target.value
  //     if(!value.trim()) return
  //     setTagsValues(isMulti ? [...tagsValues, value] : [value])
  //     e.target.value = ''
  // }

  return (
      <div className='uk-flex'>
          <div className='tags-input-container'>
              {tagsValues.map((tag, index) => (
                  <div className='tag-item' key={index}>
                      <span className='text'>{tag.value}</span>
                      <Icon className='close' icon={'close'} onClick={() => tagRemoveHandler && tagRemoveHandler(tag)}/>
                  </div>
              ))}
              <input
                  type='text'
                  className='tags-input'
                  disabled={disabled}
                  placeholder={placeholder ?? 'Выберите объект'}
                  // onKeyDown={handleKeyDown}
              />
          </div>
          <button className={'tag-btn-chooser'} onClick={buttonHandler}>
              <Icon icon={buttonIcon ?? 'group'} className={'tag-btn-icon'}/>
          </button>
      </div>
  )
}
