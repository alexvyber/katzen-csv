import { Katzen } from "../../src/components/Katzen"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/dialog"

export default function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Dialog>
        <DialogTrigger asChild={true}>
          <button variant="outline">Open</button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-xl">
          <div className="flex items-center space-x-2">
            <Katzen
              renderUploadInfo={({ rows }) => (
                <div className="bg-blue-100 flex gap-4 p-2">
                  {rows.map((row) => (
                    <div>row.name</div>
                  ))}
                </div>
              )}
              renderHeadersSelecting={({ tableSlice }) => <>{tableSlice.map((item) => item.first)}</>}
              renderColumnsMapping={({ mappings }) => (
                <>
                  {mappings.map((item) => (
                    <>{item.destinationColumn}</>
                  ))}
                </>
              )}
              columns={[
                { id: "1", name: "first" },
                { id: "2", name: "second" },
              ]}
              onComplete={(data) => {
                data.data[0].first
              }}
            />
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild={true}>
              <button
                type="button"
                variant="secondary"
              >
                Close
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
