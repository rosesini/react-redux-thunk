import styled from 'styled-components'
import ConstructorPodium from '../features/constructors/ConstructorPodium'
import DriverPodium from '../features/drivers/DriverPodium'
import SeasonSelector from '../components/SeasonSelector'

const Container = styled.div`
  max-width: 1320px;
  margin: 20px auto;
  padding: 0 10px;
`

const Standings = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 -10px;
`

const StandingsContainer = styled.div`
  flex: 100% 1;
  margin: 0 10px;
`

export default function SeasonPage() {
  return (
    <Container>
      <h1>Standings for <SeasonSelector /></h1>

      <Standings>
        <StandingsContainer>
          <DriverPodium />
        </StandingsContainer>
        <StandingsContainer>
          <ConstructorPodium />
        </StandingsContainer>
      </Standings>
    </Container>
  )
}
