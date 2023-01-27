import React from 'react'

interface BoxProps {
    title: string;
    text: string;
}

const Box: React.FC<BoxProps> = ({ text, title }: BoxProps) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Box;