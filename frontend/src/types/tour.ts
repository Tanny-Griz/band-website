import type { Band } from './band'

export interface Tour {
    tourId: number
    tourName: string
    startDate: string
    endDate: string
    band: Band
}
