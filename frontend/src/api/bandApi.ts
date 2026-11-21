import { apiGet } from './apiClient'
import type { Band } from '../types/band'

// Loads band data used by the public website.
export async function getBands(): Promise<Band[]> {
    return apiGet<Band[]>('/api/bands')
}

// The public site represents one band, so it uses the first record.
export async function getBand(): Promise<Band | null> {
    const bands = await getBands()
    return bands[0] ?? null
}
