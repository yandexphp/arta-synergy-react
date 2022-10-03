import React, {CSSProperties, FC, memo} from 'react'

export enum EImageAlign {
    center = 'center',
    left = 'left',
    right = 'right',
    justify = 'justify'
}

export type ImageProps = {
    styles?: CSSProperties
    width?: number | string
    height?: number | string
    align?: EImageAlign
    src?: string
}

export const Image: FC<ImageProps> = memo((props: ImageProps) => {
    const {
        styles,
        width,
        height,
        align,
        src
    } = props

    const style: CSSProperties = {
        color: '#222',
        ...styles
    }

    width && (style.width = width)
    height && (style.height = height)
    align && (style.textAlign = align)

    return (
        <div style={{
            textAlign: align
        }}>
            <img
                style={{
                    width: width ? `${width}px` : 'auto',
                    height: height ? `${height}px` : 'auto',
                }}
                src={src}
                alt={''}
            >
            </img>
        </div>
    )
})
