import Card from './Card';

type CardDeckProps = {
    cards: typeof Card[];
};

const CardDeck: React.FC<CardDeckProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card) => (
                <Card {...card} />
            ))}
        </div>
    );
}

export default CardDeck;