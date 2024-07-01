import { type FileRejection, useDropzone } from "react-dropzone"

type Props = Partial<{
  onSuccess: (file: File) => void
  onError: (fileRejections: FileRejection[]) => void
}>

// TODO: remove and/or rewrite all styles

export function Dropzone({ onSuccess, onError }: Props) {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    accept: { "text/csv": [".csv"] },

    onDropRejected: onError,
    onDropAccepted: async ([file]) => {
      onSuccess?.(file)
    },
  })

  const style = { background: "#efefef", padding: "8px 16px", borderRadius: "8px" }

  return (
    <div
      {...getRootProps()}
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "2px dashed var(--color-border)",
        borderRadius: "var(--border-radius-2)",
      }}
    >
      <input {...getInputProps()} />

      {isDragActive && <div style={style}>Drop file here</div>}

      {!isDragActive && (
        <>
          <span style={style}>Drop file here</span>

          <span>or</span>

          <button
            onClick={open}
            style={style}
          >
            Browse files
          </button>
        </>
      )}
    </div>
  )
}
