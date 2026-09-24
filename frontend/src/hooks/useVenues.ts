import { useEffect, useState } from 'react'
import { getVenues } from '../api/venueApi'
import type { Venue } from '../types/venue'

export function useVenues() {
    const [venues, setVenues] = useState<Venue[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadVenues() {
            try {
                const data = await getVenues()
                setVenues(data)
            } catch {
                setError('Failed to load venues')
            } finally {
                setLoading(false)
            }
        }

        loadVenues()
    }, [])

    return { venues, loading, error }
}
