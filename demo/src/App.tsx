import { Katzen } from "../../src/components/Katzen"

export default function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Katzen
        renderUploadInfo={({ rows }) => <>{rows.map((row) => row.title)}</>}
        renderHeadersSelecting={({ tableSlice }) => <>{tableSlice.map((item) => item.first)}</>}
        renderColumnsMapping={({ mappings }) => (
          <>
            {mappings.map((item) => (
              <>{item.destinationColumn}</>
            ))}
          </>
        )}
        columns={[
          {
            id: "1",
            name: "first",
          },
          {
            id: "2",
            name: "second",
          },
        ]}
        onComplete={(data) => {
          data.data[0].first
        }}
      />
      {/* <Katzen<{ id: string; name: "first" | "second" }[]>
        columns={[
          {
            id: "1",
            name: "first",
          },
          {
            id: "2",
            name: "second",
          },
        ]}
        onComplete={(data) => {
          data.data[0].first
        }}
      /> */}
    </div>
  )
}
