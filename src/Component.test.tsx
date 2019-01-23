/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import { render } from 'react-testing-library'

import Component from './Component'

describe('<Component>', () => {
  it('matches snapshot', () => {
    const { container } = render(<Component />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has the correct content', () => {
    const { getByTestId } = render(<Component />)
    expect(getByTestId('component-id')).toHaveTextContent('Hello World')
  })
})
