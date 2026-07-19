/**
 * API Utility for calling the backend.
 * Next.js will proxy any request starting with /api to the FastAPI backend (http://localhost:8000)
 */

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  // Ensure the endpoint starts with a slash
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

  const finalOptions: RequestInit = {
    ...options,
    cache: options.cache || 'no-store', // Prevent Next.js from caching API responses by default
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...options.headers,
    },
  };

  const response = await fetch(`/api${path}`, finalOptions);

  if (!response.ok) {
    if (response.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
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
