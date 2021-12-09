import styled, { keyframes } from 'styled-components'
import { ReactComponent as LoadingSvg } from '../assets/loading.svg'

const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`

const Loading = styled(LoadingSvg)`
  display: block;
  height: 64px;
  width: 64px;
  margin: auto;
  fill: #d8d9e0;

  path {
    transform-origin: center;
    animation: ${spin} 1s linear infinite;
  }
`

export default Loading
