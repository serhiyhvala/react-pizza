import { useEffect } from 'react'

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current.contains(event.target)) {
        handler(event)
      }
    }
    document.addEventListener('click', listener)
    return () => document.removeEventListener('click', listener)
  }, [ref, handler])
}
