import React, { CSSProperties, FC, memo } from 'react'
import classNames from 'classnames'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/css/uikit.min.css'

UIkit.use(Icons)

export enum ETextSize {
    small = 'uk-text-small',
    default = 'uk-text-default',
    large = 'uk-text-large'
}

export enum ETextFontFamily {
    'Open Sans' = 'Open Sans',
    Arial = 'Arial',
    'Courier New' = 'Courier New',
    Tahoma = 'Tahoma',
    'Times New Roman' = 'Times New Roman',
    Trebuchet = 'Trebuchet',
    Verdana = 'Verdana'
}

export enum ETextFontStyle {
    bold = 'bold',
    italic = 'italic',
    underline = 'underline',
    strike = 'strike'
}

export enum ETextAlign {
    center = 'center',
    left = 'left',
    right = 'right',
    justify = 'justify'
}

export type TextProps = {
    value: string
    size?: 'small' | 'default' | 'large'
    styles?: CSSProperties
    fontFamily?: ETextFontFamily
    fontSize?: number
    width?: number | string
    height?: number | string
    align?: ETextAlign
    hidden?: boolean
    isFormEditor?: boolean
    onClick?: () => void
    classes?: string
    truncate?: boolean
    bold?: boolean
    underline?: boolean
    strike?: boolean
    italic?: boolean
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        value,
        size,
        styles,
        fontFamily,
        fontSize,
        width,
        height,
        align,
        isFormEditor,
        hidden,
        onClick,
        classes,
        truncate,
        strike,
        underline,
        bold,
        italic
    } = props

    const textSize = size ? ETextSize[size] : ETextSize.default
    const textHidden = hidden ? !isFormEditor : false
    const style: CSSProperties = {
        color: '#222',
        ...styles
    }

    fontFamily && (style.fontFamily = fontFamily)
    fontSize && (style.fontSize = fontSize)
    width && (style.width = width)
    height && (style.height = height)
    hidden && isFormEditor && (style.opacity = 0.5)
    align && (style.textAlign = align)
    italic && (style.fontStyle = 'italic')
    bold && (style.fontWeight = 'bold')
    underline && (style.textDecoration = 'underline')
    strike && (style.textDecoration = 'line-through')

    return (
        <div
            className={classNames(textSize, {'uk-text-truncate': truncate}, classes)}
            style={style}
            hidden={textHidden}
            onClick={onClick}
        >
            {value}
        </div>
    )
})
