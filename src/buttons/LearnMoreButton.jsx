import Button from '../components/Button'
export default function LearnMoreButton() {
    return (
        <Button variant="secondary" asLink to="/about" className="btn-lg">
            Saiba mais
        </Button>
    )
}