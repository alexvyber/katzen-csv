import { Dropzone } from "../Dropzone"
import { Stepper } from "../Stepper"
import type { KatzenComponent } from "./types"
import { useStepNavigation } from "../Stepper/use-stepper-navigation"

export const Katzen: KatzenComponent = (_props) => {
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
