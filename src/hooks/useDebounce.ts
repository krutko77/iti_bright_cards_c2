import {useCallback, useRef} from "react";

export default function useDebounce(callback: any, delay: number) {
    const timer = useRef()

    return useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        // @ts-ignore
        timer.current = setTimeout(() => {
            callback()
        }, delay)
    },[callback, delay])
 }

 // todo: need to fix type and @ts-ignore