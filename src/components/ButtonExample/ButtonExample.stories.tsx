import React from 'react'
import { Meta } from '@storybook/react'

import { ButtonExample, ButtonExampleProps } from './ButtonExample'

const meta: Meta = {
  title: 'Пример компонента',
  component: ButtonExample
}

export default meta

export const Default = (props: ButtonExampleProps) => <ButtonExample label={props.label || 'Hello World'} />
