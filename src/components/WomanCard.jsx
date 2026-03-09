import SeeFactsheetButton from '../buttons/SeeFactsheetButton'

const PLACEHOLDER_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EppufXWmdvszk-pi6Y4uk1k7sCBWxbCOww&s'

export default function WomanCard({ woman }) {
  if (!woman) return null

  const imageUrl = woman.imageUrl || PLACEHOLDER_IMAGE

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={imageUrl}
            alt={woman.name}
            className="rounded-xl object-cover w-full h-64"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-base-content">{woman.name}</h2>
          <p className="text-base-content/80">{woman.shortDescription}</p>
          <div className="card-actions mt-2">
            <SeeFactsheetButton to={`/women/${woman.id}`} className="mt-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
