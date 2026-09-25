import { apiGet } from './apiClient'
import type { Band } from '../types/band'

export async function getBands(): Promise<Band[]> {
    return apiGet<Band[]>('/api/bands')
}

export async function getBand(): Promise<Band | null> {
    const bands = await getBands()
    return bands[0] ?? null
}
