import React from 'react'

import { Text, ETextAlign, ETextFontFamily, Props } from './Text'

export default {
  title: 'Неизменяемый текст',
  component: Text,
}

export const Default = (props: Props) => {
  const { value, size, fontSize, fontFamily, align, styles, width, height, isFormEditor, classes, truncate, bold, underline, strike, italic } = props

  return (
    <Text
      value={value || 'Неизменяемый текст'}
      size={size || 'small'}
      fontSize={fontSize || 14}
      fontFamily={fontFamily || ETextFontFamily.Tahoma}
      align={align || ETextAlign.left}
      styles={styles}
      width={width || '100%'}
      height={height || 'auto'}
      isFormEditor={isFormEditor}
      classes={classes}
      truncate={truncate}
      bold={bold}
      underline={underline}
      strike={strike}
      italic={italic}
    />
  )
}
