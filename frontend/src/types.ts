import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface League {
  _id: string
  name: string
  sport: string
  teams: Team[]
}

export interface Team {
  _id: string
  name: string
  thumbnail: string
  players: Player[]
}

export interface Player {
  _id: string
  name: string
  thumbnail: string
  position: string
  born: string
  signin: Signin
}

export interface Signin {
  currency: 'eur' | 'gpp'
  amount: number
}
