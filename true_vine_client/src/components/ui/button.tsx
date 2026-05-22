interface ButtonProps {
    style?: React.CSSProperties;
    name?: string;
    onClick?: () => void;
}

function Button({ style, name, onClick }: ButtonProps) {
    return (
        <>
            <button onClick={onClick} style={style}>{name}</button>
        </>
    );
}

export default Button;