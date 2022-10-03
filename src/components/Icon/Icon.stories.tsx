import React from 'react'
import { Meta } from '@storybook/react'

import { Icon, IconProps } from './Icon'

const meta: Meta = {
  title: 'Иконка',
  component: Icon
}

export default meta

export const Default = (props: IconProps) => <Icon icon={props.icon || 'verified'} />
