import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDriverStandings, selectDriverStandingsPodium } from './driverStandingsSlice'
import { Podium, PodiumDriver, PodiumItem, PodiumLink, PodiumRank, PodiumRight, PodiumSubdetail, PodiumTime, TeamColorIcon } from '../../components/StandingStyles'
import { RANDOM_TEAM_COLORS } from '../../utils'

type DriverStandingsPodiumProps = {
  season: string
}

const DriverStandingsPodium: React.FC<DriverStandingsPodiumProps> = ({ season }) => {
  const dispatch = useDispatch()
  const standings = useSelector(state => selectDriverStandingsPodium(state, season))
  
  useEffect(() => {
    loadDriverStandings(season, dispatch)
  }, [dispatch, season])  

  return (
    <Podium>
      {standings.map((standing: any, id: number) => (
        <PodiumItem key={id}>
          <PodiumLink href={standing["url"]} target="_blank">
            <PodiumRank>{standing["position"]}</PodiumRank>
            <TeamColorIcon style={{ background: RANDOM_TEAM_COLORS[id] }} />
            <PodiumDriver>
              <span className="text-capitalize">{standing["givenName"]}</span>
              {' '}
              <strong className="text-uppercase">{standing["familyName"]}</strong>
            </PodiumDriver>
            <PodiumSubdetail>{standing["constructor"] && standing["constructor"]["name"]}</PodiumSubdetail>
            <PodiumRight>
              <PodiumTime>{standing["points"]} PTS</PodiumTime>
            </PodiumRight>
          </PodiumLink>
        </PodiumItem>
      ))}
    </Podium>
  )
}

export default DriverStandingsPodium
