import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Podium, PodiumDriver, PodiumItem, PodiumLink, PodiumRank, PodiumRight, PodiumTime, TeamColorIcon } from '../../components/StandingStyles'
import { RANDOM_TEAM_COLORS } from '../../utils'
import { loadConstructorStandings, selectConstructorStandingsPodium } from './constructorStandingsSlice'

type ConstructorStandingsPodiumProps = {
  season: string
}

const ConstructorStandingsPodium: React.FC<ConstructorStandingsPodiumProps> = ({ season }) => {
  const dispatch = useDispatch()
  const standings = useSelector(state => selectConstructorStandingsPodium(state, season))

  useEffect(() => {
    loadConstructorStandings(season, dispatch)
  }, [dispatch, season])

  return (
    <Podium>
      {standings.map((standing: any, id: number) => (
        <PodiumItem key={id}>
          <PodiumLink href={standing["url"]} target="_blank">
            <PodiumRank>{standing["position"]}</PodiumRank>
            <TeamColorIcon style={{ background: RANDOM_TEAM_COLORS[id] }} />
            <PodiumDriver>
              <strong className="text-capitalize">{standing["name"]}</strong>
            </PodiumDriver>
            <PodiumRight>
              <PodiumTime>{standing["points"]} PTS</PodiumTime>
            </PodiumRight>
          </PodiumLink>
        </PodiumItem>
      ))}
    </Podium>
  )
}

export default ConstructorStandingsPodium
