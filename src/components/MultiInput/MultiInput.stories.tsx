import React from 'react'
import { Meta } from '@storybook/react'
import {v4} from 'uuid'

import { MultiInput } from './MultiInput'

const meta: Meta = {
  title: 'Выбор объектов',
  component: MultiInput
}

export default meta

export const Default = () => (
  <MultiInput
    values={[{
      key: v4(),
      value: `unknown (1).png`
    }]}
    multi={false}
    placeholder={'Выберите файл'}
    buttonIcon={'text_snippet'}
    buttonHandler={() => console.log('buttonHandler')}
    tagRemoveHandler={(tag) => console.log('tagRemoveHandler', tag)}
  />
)
