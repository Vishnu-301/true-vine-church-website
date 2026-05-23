interface FooterColumnProps {
    title: string;
    children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
    return (
        <div>
            <h4 className="font-semibold mb-4 text-white">{title}</h4>
            {children}
        </div>
    );
}

export default FooterColumn;