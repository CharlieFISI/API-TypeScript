import { SubsEntry, NonSensivityInfoSubsEntry } from '../types'
import subsData from './subs.json'

const subs: SubsEntry[] = subsData as SubsEntry[]

export const getEntries = (): SubsEntry[] => subs

export const findById = (id: number): NonSensivityInfoSubsEntry | undefined => {
  const entry = subs.find(d => d.id === id)
  if (entry != null) {
    const { ...restOfSubs } = entry
    return restOfSubs
  }
  return entry
}

export const getEntriesWithoutSensivityInfo = (): NonSensivityInfoSubsEntry[] => subs.map(({ nick, months, profileUrl, description }) => ({
  nick,
  months,
  profileUrl,
  description
}))
/*
export const addSubs = (newSubsEntry: NewSubsEntry): SubsEntry => {
  const newSubs = {
    id: Math.max(...subs.map(d => d.id)) + 1,
    ...newSubsEntry
  }

  subs.push(newSubs)
  return newSubs
}
*/
//  const diariesWithoutSensitiveInfo = getEntriesWithoutSensivityInfo()
//  diariesWithoutSensitiveInfo[0].comment
