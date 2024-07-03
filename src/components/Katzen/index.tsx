import { Dropzone } from "../Dropzone"
import { Stepper } from "../Stepper"
import type { KatzenType } from "./types"
import { useStepNavigation } from "../Stepper/use-stepper-navigation"

export const Katzen: KatzenType = (_props) => {
  const { goNext, goBack, stepper } = useStepNavigation()

  return (
    <div>
      <Stepper {...stepper} />
      <button onClick={goNext}>+</button>
      <button onClick={goBack}>-</button>
      <Dropzone
        onSuccess={(_file) => {}}
        onError={(_rejections) => {}}
      />
    </div>
  )
}
