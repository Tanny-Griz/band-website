import type { Band } from '../types/band'

export async function getBand(): Promise<Band | null> {
    const response = await fetch('/api/bands')

    if (!response.ok) {
        throw new Error('Failed to fetch band')
    }

    const bands: Band[] = await response.json()

    return bands[0] ?? null
}
