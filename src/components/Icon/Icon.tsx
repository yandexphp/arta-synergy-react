import React, { CSSProperties, FC, memo, MouseEventHandler, useMemo } from 'react'
import classNames from 'classnames'

import './Icon.css'

export enum EIconPositions {
    right,
    left
}

export type IconProps = {
    icon: string
    hidden?: boolean
    position?: EIconPositions
    onMousedown?: MouseEventHandler<HTMLSpanElement>
    onMouseUp?: MouseEventHandler<HTMLSpanElement>
    onClick?: MouseEventHandler<HTMLSpanElement>
    forForm?: boolean
    styles?: CSSProperties
    className?: string
    disabled?: boolean
    withHover?: boolean
    title?: string
    size?: number
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
    const {
        hidden,
        icon,
        position,
        onClick,
        forForm,
        styles,
        className,
        disabled,
        size,
        onMousedown,
        onMouseUp,
        withHover,
        title
    } = props

    const classes = useMemo(() => classNames(
        'material-icons',
        className, {
            'uk-form-icon': forForm,
            'uk-form-icon-flip': position === EIconPositions.right,
            'withHover': withHover
        }), [className, forForm, position, withHover])

    const additionalStyles: CSSProperties = useMemo(() => ({
        opacity: disabled ? .5 : 1
    }), [disabled])

    const style: CSSProperties = useMemo(() => ({
        fontSize: size ? `${size}px` : undefined,
        pointerEvents: onClick ? 'auto' : undefined,
        cursor: (!disabled && onClick) ? 'pointer' : undefined,
        userSelect: 'none',
        ...additionalStyles,
        ...styles
    }), [additionalStyles, styles, size, disabled, onClick])

    const onMousedownHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => (!disabled && onMousedown) && onMousedown(e)
    const onMouseupHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => (!disabled && onMouseUp) && onMouseUp(e)
    const onClickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => (!disabled && onClick) && onClick(e)

    return (
        <span
            title={title}
            hidden={hidden ?? !icon}
            onMouseDown={onMousedownHandler}
            onMouseUp={onMouseupHandler}
            onClick={onClickHandler}
            style={style}
            className={classes}
        >
            {icon}
        </span>
    )
})
