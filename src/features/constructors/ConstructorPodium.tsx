import { Podium, PodiumItem, PodiumLink } from '../../components/StandingStyles'

export default function ConstructorPodium() {
  return (
    <Podium>
      <PodiumItem>
        <PodiumLink>Constructor 1</PodiumLink>
        <PodiumLink>Constructor 2</PodiumLink>
        <PodiumLink>Constructor 3</PodiumLink>
      </PodiumItem>
    </Podium>
  )
}
