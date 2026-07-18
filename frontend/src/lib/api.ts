/**
 * API Utility for calling the backend.
 * Next.js will proxy any request starting with /api to the FastAPI backend (http://localhost:8000)
 */

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  // Ensure the endpoint starts with a slash
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(`/api${path}`, { ...defaultOptions, ...options });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody}`);
  }

  // Handle empty responses
  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
}

/**
 * Example usage:
 * 
 * import { fetchApi } from '@/lib/api';
 * 
 * const checkHealth = async () => {
 *   try {
 *     const data = await fetchApi<{status: string}>('/health');
 *     console.log(data.status); // "active"
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 */
