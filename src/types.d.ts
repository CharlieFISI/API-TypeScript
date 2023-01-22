export interface SubsEntry {
  id: number
  nick: string
  months: number
  profileUrl: string
  description: string
}

// export type NonSensivityInfoSubsEntry = Pick<SubsEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensivityInfoSubsEntry = Omit<SubsEntry, 'id'>

export type NewSubsEntry = Omit<SubsEntry, 'id'>
