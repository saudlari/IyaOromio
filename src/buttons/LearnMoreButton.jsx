import Button from './Button'
export default function LearnMoreButton() {
    return (
        <Button variant="secondary" asLink to="/about" className="btn-md">
            Saiba mais
        </Button>
    )
}