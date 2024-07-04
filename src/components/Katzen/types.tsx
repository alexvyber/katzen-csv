import type { ParseResult } from "papaparse"

export type KatzenComponent = <const Columns extends readonly Column[]>(props: {
  /**
   * Columns config 
   */
  columns: Columns
  /**
   * Callback that is being run when data successfully prased
   */
  onComplete?: (data: ParseResult<RowEntries<Columns>>) => void
  /**
   * TODO: document
   * @param param0
   */
  renderUploadInfo?: ({ rows }: { rows: UploadInfoRow[] }) => React.JSX.Element
  /**
   * TODO: document
   * @param param0
   */
  renderHeadersSelecting?: ({ tableSlice }: { tableSlice: RowEntries<Columns>[] }) => React.JSX.Element
  /**
   * TODO: document
   * @param param0
   */
  renderColumnsMapping?: ({ mappings }: { mappings: ColumnsMappingRow<Columns>[] }) => React.JSX.Element
}) => React.JSX.Element

interface UploadInfoRow {
  title: string
  tooltip?: string
  required?: boolean
}

interface ColumnsMappingRow<Columns extends readonly Column[]> {
  fileColumn: string
  sampleData: string
  destinationColumn: Columns[number]["name"][]
  include: boolean
}

/**
 * Get row entries types from suplied columns
 */
type RowEntries<Columns extends readonly Column[]> = { [Key in Columns[number]["name"]]: string }

export interface Column {
  id: string
  name: string
  mappings?: string[]
  isRequired?: boolean
  description?: string
}
