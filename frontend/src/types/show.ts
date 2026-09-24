import type { Tour } from './tour'
import type { Venue } from './venue'

export interface Show {
    showId: number
    showDateTime: string
    tour: Tour
    venue: Venue
}
