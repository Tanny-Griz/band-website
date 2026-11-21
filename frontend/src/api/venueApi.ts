import { apiGet } from './apiClient'
import type { Venue } from '../types/venue'

// Loads venue records used by shows and the future admin panel.
export async function getVenues(): Promise<Venue[]> {
    return apiGet<Venue[]>('/api/venues')
}
