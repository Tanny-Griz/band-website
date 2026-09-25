import { apiGet } from './apiClient'
import type { Venue } from '../types/venue'

export async function getVenues(): Promise<Venue[]> {
    return apiGet<Venue[]>('/api/venues')
}
