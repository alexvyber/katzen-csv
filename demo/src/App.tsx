import { Katzen } from "../../src/components/Katzen"

export default function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Katzen
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
    </div>
  )
}
