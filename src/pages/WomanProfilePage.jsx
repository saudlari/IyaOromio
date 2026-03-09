import { useParams } from 'react-router-dom'
import WomanProfile from './WomanProfile'

export default function WomanProfilePage() {
  const { id } = useParams()
  return <WomanProfile key={id} />
}
