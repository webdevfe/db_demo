export type TablesProps = Array<TableProps>;

export interface Column {
  name: number;
  type: string;
}

export interface TableProps {
  id: number;
  schema: string;
  table: string;
  columns: Array<Column>;
}

export interface MetricsProps {
  id: number;
  metric: string;
  column: string;
  currentValue: number;
}
