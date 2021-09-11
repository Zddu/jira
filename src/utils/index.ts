import { useEffect, useState } from "react"

export const isFalsy = (value: any) => value === 0 ? false : !value

export const cleanObject = (object: {[key: string]: unknown}) => {
  const result = {...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debouncedValue
}

export const useMount = (cb: Function) => {
  useEffect(() => {
    if (cb && typeof cb === 'function') {
      cb()
    }
  }, [])
}
