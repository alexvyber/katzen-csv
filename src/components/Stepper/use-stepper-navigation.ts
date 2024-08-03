// import { useEffect } from "react"
// import { useLocalStorage } from "../Katzen/use-local-storage"
import { useStepper } from "./use-stepper"
import type { Step } from "./types"

const steps: Step[] = [
  { label: "Upload File", id: 0 },
  { label: "Select Headers", id: 1 },
  { label: "Map Columns", id: 2 },
]

export function useStepNavigation(initialStep?: number) {
  const stepper = useStepper(steps, initialStep ?? 0)
  // const [storageStep, setStorageStep] = useLocalStorage("katzen_stepper_step", 0)

  const goBack = () => {
    setStep(stepper.current - 1 || 0)
  }

  const goNext = () => {
    setStep(stepper.current + 1 || 0)
  }

  const setStep = (step: number) => {
    if (step >= 0 && step <= stepper.steps.length) {
      // setStorageStep(step)
      stepper.setCurrent(step)
    }
  }

  // useEffect(() => {
  //   stepper.setCurrent(storageStep ?? 0)
  // }, [storageStep])

  return {
    currentStep:
      //  storageStep ??
      stepper.current,
    setStep,
    goBack,
    goNext,
    stepper,
    stepId: stepper?.step?.id,
    // setStorageStep,
  }
}
