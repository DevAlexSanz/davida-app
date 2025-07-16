export {};
declare global {
  interface SqlResponse<E> {
    statusCode: number;
    message: string;
    success: boolean;
    data: E;
  }
}
