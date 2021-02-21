import { useEffect, useState } from 'react';

export default function useAutoType(s: string) {
    const [state, setState] = useState({
        current: "",
        idx: 0
    })

    useEffect(() => {
        setState({
            current: "",
            idx: 0
        })
    }, [s])

    useEffect(() => {
        if (state.idx >= s.length) {
            return
        }
        
        const timerID = setTimeout(() => {
            setState({
                ...state,
                current: state.current + s[state.idx],
                idx: state.idx + 1,
            })
        }, 50)

        return () => clearTimeout(timerID)
    })

    return state.current
}