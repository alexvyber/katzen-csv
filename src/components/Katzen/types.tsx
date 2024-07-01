import type { ParseResult } from "papaparse"

// TODO: document type
export type KatzenType = <_ extends "iternal use only", const Columns extends readonly Column[]>(props: {
  columns: Columns
  /**
   * Callback that is being run when data successfully prased
   */
  onComplete?: (data: ParseResult<RowEntries<Columns>>) => void
}) => any

/**
 * Get row entries types from suplied columns
 */
type RowEntries<Col> = Col extends readonly Column[]
  ? { [Key in Col[number]["name"]]: string }
  : { [key: string]: unknown }

// TODO: document type
export type Column = {
  id: string
  name: string
  mappings?: string[]
  isRequired?: boolean
  description?: string
}
