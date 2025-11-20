import { useState } from 'react'
import Panel from './Panel'

export default function Accordeon({ vocabulary }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {vocabulary.map((item, index) => {
                const { de, en } = item;
                return <Panel 
                    title={en}
                    isActive={activeIndex === index}
                    activate={() => setActiveIndex(index)}
                >
                    {de}
                </Panel>
            })}
        </>
    )
}