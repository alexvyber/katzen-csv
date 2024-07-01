import { Dropzone } from "../Dropzone"
import { KatzenType } from "./types"

export const Katzen: KatzenType = (props) => {
  return (
    <Dropzone
      onSuccess={(file) => {
        console.log(file)
      }}
      onError={(rejections) => console.log(rejections)}
    />
  )
}
