import { Podium, PodiumItem, PodiumLink } from '../../components/StandingStyles'

export default function DriverPodium() {
  return (
    <Podium>
      <PodiumItem>
        <PodiumLink>Driver 1</PodiumLink>
        <PodiumLink>Driver 2</PodiumLink>
        <PodiumLink>Driver 3</PodiumLink>
      </PodiumItem>
    </Podium>
  )
}
