import { apiGet } from './apiClient'
import type { Show } from '../types/show'

// Loads upcoming shows, including their related tour and venue data.
export async function getShows(): Promise<Show[]> {
    return apiGet<Show[]>('/api/shows')
}
