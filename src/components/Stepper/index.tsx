import type { StepperProps } from "./types"

export function Stepper({ steps, current }: StepperProps) {
  const style = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  } satisfies React.HTMLAttributes<HTMLDivElement>["style"]

  return (
    <div style={style}>
      {steps.map((step, index) => (
        <div key={step.id ?? step.label}>
          <div>{index < current ? "done" : index + 1}</div>
          <div>{step.label}</div>
        </div>
      ))}
    </div>
  )
}
