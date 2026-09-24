import { useEffect, useState } from 'react'
import { getShows } from '../api/showApi'
import type { Show } from '../types/show'

export function useShows() {
    const [shows, setShows] = useState<Show[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadShows() {
            try {
                const data = await getShows()
                setShows(data)
            } catch {
                setError('Failed to load shows')
            } finally {
                setLoading(false)
            }
        }

        loadShows()
    }, [])

    return { shows, loading, error }
}
