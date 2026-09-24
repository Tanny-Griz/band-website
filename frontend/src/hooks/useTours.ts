import { useEffect, useState } from 'react'
import { getTours } from '../api/tourApi'
import type { Tour } from '../types/tour'

export function useTours() {
    const [tours, setTours] = useState<Tour[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadTours() {
            try {
                const data = await getTours()
                setTours(data)
            } catch {
                setError('Failed to load tours')
            } finally {
                setLoading(false)
            }
        }

        loadTours()
    }, [])

    return { tours, loading, error }
}