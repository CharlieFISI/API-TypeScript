import { DiaryEntry, NewDiaryEntry, NonSensivityInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensivityInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return entry
}

export const getEntriesWithoutSensivityInfo = (): NonSensivityInfoDiaryEntry[] => diaries.map(({ id, date, weather, visibility }) => ({
  id,
  date,
  weather,
  visibility
}))

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}

//  const diariesWithoutSensitiveInfo = getEntriesWithoutSensivityInfo()
//  diariesWithoutSensitiveInfo[0].comment
