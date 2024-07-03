export interface Step {
  label: string
  id?: string | number
}

export interface StepperProps {
  current: number
  setCurrent: React.Dispatch<React.SetStateAction<number>>
  step: Step
  steps: Step[]
}
