import { useMemo, useState } from "react"
import type { Step, StepperProps } from "./types"

export function useStepper(steps: Step[], initialStep = 0): StepperProps {
  const [current, setCurrent] = useState(initialStep)

  const step = useMemo(() => steps[current], [current, steps])

  return { steps, current, step, setCurrent }
}
