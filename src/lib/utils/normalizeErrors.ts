import axios from "axios";

interface NormalizedError {
  message: string;
  statusCode?: number;
  validationErrors?: Record<string, string[]>;
}

export const normalizeError = (error: unknown): NormalizedError => {
  if (axios.isAxiosError(error)) {
    const response = error.response?.data;

    return {
      message: response?.message || "Error desconocido",
      statusCode: response?.statusCode,
      validationErrors: response?.errors || null,
    };
  }

  return {
    message: "Ocurrió un error inesperado",
  };
};
