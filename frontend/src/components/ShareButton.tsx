import './ShareButton.scss';

interface ShareButtonProps {
    onClick: () => void;
    isDisabled?: boolean;
}

function ShareButton({onClick, isDisabled = false}: ShareButtonProps) {
    return (
        <button className="share-button" onClick={onClick} disabled={isDisabled}>
            <img src="/share.svg" alt="Share icon"/>
            Share
        </button>
    );
}

export default ShareButton;