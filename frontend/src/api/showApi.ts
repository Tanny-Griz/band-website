import type { Show } from '../types/show'

export async function getShows(): Promise<Show[]> {
    const response = await fetch('/api/shows')

    if (!response.ok) {
        throw new Error('Failed to fetch shows')
    }

    return response.json()
}
