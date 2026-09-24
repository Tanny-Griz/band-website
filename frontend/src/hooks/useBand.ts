import { useEffect, useState } from 'react'
import { getBand } from '../api/bandApi'
import type { Band } from '../types/band'

export function useBand() {
    const [band, setBand] = useState<Band | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function loadBand() {
            try {
                const data = await getBand()
                setBand(data)
            } catch {
                setError('Failed to load band')
            } finally {
                setLoading(false)
            }
        }

        loadBand()
    }, [])

    return { band, loading, error }
}