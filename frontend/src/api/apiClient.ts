// Shared GET helper: checks the response and converts JSON into the requested type.
export async function apiGet<T>(url: string): Promise<T> {
    // Locally this stays empty so Vite can proxy /api requests to Spring Boot.
    // In Vercel, VITE_API_URL points to the deployed Render backend.
    const apiBaseUrl = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')
    const response = await fetch(`${apiBaseUrl}${url}`)

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
    }

    return response.json()
}
