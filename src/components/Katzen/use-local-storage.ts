import { useState, useEffect, useCallback } from "react"

export function useLocalStorage<State>(
  key: string,
  initialState: State
): [state: State | null, update: (value: State) => void, reset: () => void] {
  const [state, setState] = useState<State | null>(initialState)

  useEffect(() => {
    const restored = getStorage<State>(key)

    if (restored) {
      setState(restored)
    }
  }, [key])

  const update = useCallback(
    (value: State) => {
      setStorage(key, value)
      setState(value)
    },
    [key]
  )

  const reset = useCallback(() => {
    removeStorage(key)
    setState(initialState)
  }, [initialState, key])

  return [state, update, reset]
}

export const getStorage = <T>(key: string): T | null => {
  let value = null

  try {
    const result = window.localStorage.getItem(key)

    if (result) {
      value = JSON.parse(result)
    }
  } catch (error) {
    console.error(error)
  }

  return value
}

export const setStorage = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}

export const removeStorage = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}
