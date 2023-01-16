export type Weather = "sunny" | "rainny" | "cloudy" | "windy" | "stormy"
export type Visibility = "great" | "good" | "ok" | "poor"

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string,
}