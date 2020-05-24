import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Main from './index'

describe(__filename, () => {
  it('should render', () => {
    const main = render(<Main/>)
    expect(main.container).toHaveTextContent('hello world')
  })
})

