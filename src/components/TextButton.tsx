interface ITextButton {
    text: string;
    link?: string;
}


export const TextButton = ({
    text,
    link,
}: ITextButton) => {
    function linkSelector(text: string, link?: string) {
        if (link)
            return (
                <a href={link} key={link}>
                    {text}
                </a>
            );
        return text;
    }
    return <button>{linkSelector(text, link)}</button>;
}
