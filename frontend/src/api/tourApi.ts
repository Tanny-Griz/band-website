import { apiGet } from './apiClient'
import type { Tour } from '../types/tour'

export async function getTours(): Promise<Tour[]> {
    return apiGet<Tour[]>('/api/tours')
}
