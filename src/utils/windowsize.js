import { useState, useEffect, useCallback } from "react"

export function useWindowSize() {
  const isClient = typeof window === "object"

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }, [isClient])

  const changeVhVariable = useCallback(() => {
    const vh = isClient && window.innerHeight * 0.01
    typeof document !== "undefined" &&
      document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [isClient])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    changeVhVariable()
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
      changeVhVariable()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [changeVhVariable, getSize, isClient])

  return windowSize
}
