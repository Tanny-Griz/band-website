import { apiGet } from './apiClient'
import type { Tour } from '../types/tour'

// Loads tours from the backend API.
export async function getTours(): Promise<Tour[]> {
    return apiGet<Tour[]>('/api/tours')
}
