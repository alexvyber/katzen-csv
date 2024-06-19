import { renderHook } from "@testing-library/react-hooks"
import { expect, it } from "vitest"
import { useWindowSize } from "../hooks/use-window-size"

it("should increment counter", () => {
  const { result } = renderHook(() => useWindowSize(), {})

  expect(result.current).toStrictEqual([1024, 768])
})
