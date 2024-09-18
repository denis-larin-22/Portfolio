interface IProps {
    word: string,
    delay?: boolean
}

export const WordAnimate = ({ word, delay = false }: IProps) => {
    return (
        <svg className='inline-block svg-word'>
            <text className={delay ? 'text text_delay' : 'text'} x="0%" y="75%" >
                {word}
            </text>
        </svg>
    )
}