import LearnMoreWoman from '../buttons/LearnMoreWoman'

export default function WomanCard() {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EppufXWmdvszk-pi6Y4uk1k7sCBWxbCOww&s"
                        alt="Foto da mulher"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Nome da mulher</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <LearnMoreWoman />
                    </div>
                </div>
            </div>
        </div>
    )
}