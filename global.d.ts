export {};

declare global {
  interface BaseSqlResponse {
    statusCode: number;
    message: string;
    success: boolean;
  }

  interface SqlResponse<E> extends BaseSqlResponse {
    record: E;
  }

  interface SqlResponseArray<E> extends BaseSqlResponse {
    records: E[];
  }
}
