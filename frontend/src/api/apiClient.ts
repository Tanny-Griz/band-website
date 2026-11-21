// Shared GET helper: checks the response and converts JSON into the requested type.
export async function apiGet<T>(url: string): Promise<T> {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
    }

    return response.json()
}
