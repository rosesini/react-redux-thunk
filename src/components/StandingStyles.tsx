import styled from 'styled-components'

export const Podium = styled.ul`
  padding: 4px;
  border-radius: 4px;
  background-color: #f3f3f3;
  counter-reset: podium;
  list-style-type: none;
`

export const PodiumItem = styled.li`
  align-items: center;
  backface-visibility: hidden;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 2px;
  overflow: hidden;
  padding: 0;
`

export const PodiumLink = styled.a`
  padding: 15px 10px 15px 20px;
  transition: .4s cubic-bezier(.35, .15, .6, 1);
  width: 100%;
  align-items: center;
  backface-visibility: hidden;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  background-color: white;
  text-decoration: none;

  &:hover {
    background-color: #38383f;
    color: white;
  }
`
