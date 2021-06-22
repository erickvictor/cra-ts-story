import React from 'react'
import { render, screen } from '@testing-library/react'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a label by default', () => {
    render(<Heading />)

    expect(screen.getByLabelText(/Suno Movies/i)).toBeInTheDocument()
  })
})
