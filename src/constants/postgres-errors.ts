export enum PostgresErrorCodes {
  INTEGRITY_CONSTRAINT_VIOLATION = 23000,
  RESTRICT_VIOLATION = 23001,
  NOT_NULL_VIOLATION = 23502,
  FOREIGN_KEY_VIOLATION = 23503,
  UNIQUE_VIOLATION = 23505,
  CHECK_VIOLATION = 23514,
}