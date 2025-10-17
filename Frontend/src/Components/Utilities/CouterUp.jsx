import React, { useEffect, useState } from 'react'

function CouterUp({ target, duration = 1500 }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const increment = 10
        const steps = duration / increment
        const newtime = target / steps

        const counter = setInterval(() => {
            start += newtime
            if (start >= target) {
                start = target
                clearInterval(counter)
            }
            setCount(Math.ceil(start))
        }, increment)

        return () => clearInterval(counter)
    }, [target, duration])

    return <span> {count} </span>
}

export default CouterUp