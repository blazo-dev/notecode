
interface SelectorProps {
    options: string[];
    selectedOption: string | null;
    onSelect: (option: string) => void;
    title: string;
}

function Selector({ options, selectedOption, onSelect, title }: SelectorProps) {
    return (
        <div className="selector">
            <h3 className="selector__title">{title}</h3>
            <ul className="selector__list">
                {options.map((option) => (
                    <li
                        key={option}
                        className={`selector__item ${selectedOption === option ? "selector__item--selected" : ""
                            }`}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Selector;
