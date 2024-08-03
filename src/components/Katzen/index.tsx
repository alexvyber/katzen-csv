import { Dropzone } from "../Dropzone"
import { Stepper } from "../Stepper"
import type { KatzenComponent } from "./types"
import { useStepNavigation } from "../Stepper/use-stepper-navigation"

export const Katzen: KatzenComponent = ({ columns, renderUploadInfo: UploadInfo }) => {
  const { goNext, goBack, stepper, currentStep } = useStepNavigation()

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  } satisfies React.HTMLAttributes<HTMLDivElement>["style"]

  return (
    <div style={style}>
      <Stepper {...stepper} />

      {currentStep === 0 && (
        <div>
          <Dropzone
            onSuccess={(_file) => {
              goNext()
            }}
            onError={(_rejections) => {}}
          />

          {UploadInfo && <UploadInfo rows={columns.map(({ mappings, ...col }) => col)} />}
        </div>
      )}

      {currentStep === 1 && <>Select headers</>}
      {currentStep === 2 && <>Map Columns</>}
    </div>
  )
}
