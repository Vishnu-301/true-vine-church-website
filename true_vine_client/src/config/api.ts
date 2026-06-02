// In development the Vite proxy forwards /api/* to the Express server,
// so baseURL should be empty (""). Set VITE_API_URL for production deployments.
export const baseURL = import.meta.env.VITE_API_URL || "";
