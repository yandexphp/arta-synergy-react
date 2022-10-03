import React from 'react'

import './ButtonExample.css'

export type ButtonExampleProps = {
  label: string
  onClick?: () => void
}

export const ButtonExample = (props: ButtonExampleProps) => (
  <button onClick={props.onClick}>
    {props.label}
  </button>
)
