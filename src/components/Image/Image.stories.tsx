import React from 'react'
import { Meta } from '@storybook/react'

import { Image } from './Image'

const meta: Meta = {
  title: 'Изображение',
  component: Image
}

export default meta

export const Default = () => (
  <Image
    src='https://media.tproger.ru/uploads/2016/10/reactmini.png'
    width={770}
    height={270}
  />
)
