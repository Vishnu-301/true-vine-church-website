interface LinkProps {
    style?: React.CSSProperties;
    anchor?: string;
    name?: string;
}

function Links({ style, anchor, name }: LinkProps) {
    return (
        <>
            <a href={anchor} style={style}>{name}</a>
        </>
    );
}

export default Links;
