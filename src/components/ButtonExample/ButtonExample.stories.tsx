import React from 'react'
import { Meta } from '@storybook/react'

import { ButtonExample, Props } from './ButtonExample'

const meta: Meta = {
  title: 'Пример компонента',
  component: ButtonExample
}

export default meta

export const Default = (props: Props) => <ButtonExample label={props.label || 'Hello World'} />
