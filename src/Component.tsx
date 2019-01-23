import * as React from 'react'
import styled from 'styled-components'

const StyledComponent = styled.div`
  background-color: green;
`

const MyComponent = () => (
  <StyledComponent data-testid="component-id">Hello World</StyledComponent>
)

export default MyComponent
