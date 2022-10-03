import React from 'react'
import { Meta } from '@storybook/react'
import {v4} from 'uuid'

import { MultiInput, MultiInputProps } from './MultiInput'

const meta: Meta = {
  title: 'Выбор объектов',
  component: MultiInput
}

export default meta

export const Default = (props: MultiInputProps) => (
  <MultiInput
    values={[{
      key: v4(),
      value: `unknown (1).png`
    }]}
    multi={props.multi || false}
    placeholder={props.placeholder || 'Выберите файл'}
    buttonIcon={props.buttonIcon || 'text_snippet'}
    buttonHandler={() => console.log('buttonHandler')}
    tagRemoveHandler={(tag) => console.log('tagRemoveHandler', tag)}
  />
)
