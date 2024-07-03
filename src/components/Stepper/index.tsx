import type { StepperProps } from "./types"

export function Stepper({ steps, current }: StepperProps) {
  return (
    <div>
      {steps.map((step, index) => (
        <div key={step.id ?? step.label}>
          <div>{index < current ? "done" : index + 1}</div>
          <div>{step.label}</div>
        </div>
      ))}
    </div>
  )
}
