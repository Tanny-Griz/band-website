import type { Venue } from '../types/venue'

export async function getVenues(): Promise<Venue[]> {
    const response = await fetch('/api/venues')

    if (!response.ok) {
        throw new Error('Failed to fetch venues')
    }

    return response.json()
}
