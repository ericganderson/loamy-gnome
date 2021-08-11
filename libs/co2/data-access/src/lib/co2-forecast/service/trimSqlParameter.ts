export function TrimSqlParameter(sql: string): string {
  return sql.replace(/\s*\n\s*/g, ' ')
}
