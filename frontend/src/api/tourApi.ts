import type { Tour } from '../types/tour'

export async function getTours(): Promise<Tour[]> {
    const response = await fetch('/api/tours')

    if (!response.ok) {
        throw new Error('Failed to fetch tours')
    }

    return response.json()
}
