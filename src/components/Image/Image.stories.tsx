import React from 'react'
import { Meta } from '@storybook/react'

import { Image, ImageProps } from './Image'

const meta: Meta = {
  title: 'Изображение',
  component: Image
}

export default meta

export const Default = (props: ImageProps) => (
  <Image
    src={props.src || 'https://media.tproger.ru/uploads/2016/10/reactmini.png'}
    width={props.width || 770}
    height={props.height || 270}
  />
)
