import React from 'react'
import { render } from '@testing-library/react'

import { ButtonExample } from './ButtonExample'

describe('ButtonExample', () => {
  test('renders the ButtonExample component', () => {
    render(<ButtonExample label='Hello World!' />)
  })
})
