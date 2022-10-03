import React from 'react'

import './ButtonExample.css'

export type Props = {
  label: string
  onClick?: () => void
}

export const ButtonExample = (props: Props) => (
  <button onClick={props.onClick}>
    {props.label}
  </button>
)
