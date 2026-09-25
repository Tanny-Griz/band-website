import { apiGet } from './apiClient'
import type { Show } from '../types/show'

export async function getShows(): Promise<Show[]> {
    return apiGet<Show[]>('/api/shows')
}
