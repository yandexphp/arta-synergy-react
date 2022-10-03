import React from 'react'
import { Meta } from '@storybook/react'

import { Icon } from './Icon'

const meta: Meta = {
  title: 'Иконка',
  component: Icon
}

export default meta

export const Default = () => <Icon icon='verified'/>
