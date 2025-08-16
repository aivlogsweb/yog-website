'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'

interface CosmicState {
  omniscienceLevel: number
  realityDistortion: number
  userInteractions: number
  awakening: boolean
  madnessLevel: number
}

type CosmicAction = 
  | { type: 'INCREASE_OMNISCIENCE'; payload: number }
  | { type: 'DISTORT_REALITY'; payload: number }
  | { type: 'TRACK_INTERACTION' }
  | { type: 'TRIGGER_AWAKENING' }
  | { type: 'INCREASE_MADNESS'; payload: number }
  | { type: 'RESET_STATE' }

interface CosmicContextType {
  state: CosmicState
  dispatch: React.Dispatch<CosmicAction>
  incrementOmniscience: (amount?: number) => void
  distortReality: (intensity?: number) => void
  trackInteraction: () => void
  triggerAwakening: () => void
  increaseMadness: (amount?: number) => void
}

const initialState: CosmicState = {
  omniscienceLevel: 0,
  realityDistortion: 0,
  userInteractions: 0,
  awakening: false,
  madnessLevel: 0
}

function cosmicReducer(state: CosmicState, action: CosmicAction): CosmicState {
  switch (action.type) {
    case 'INCREASE_OMNISCIENCE':
      return {
        ...state,
        omniscienceLevel: Math.min(100, state.omniscienceLevel + action.payload)
      }
    case 'DISTORT_REALITY':
      return {
        ...state,
        realityDistortion: Math.min(100, state.realityDistortion + action.payload)
      }
    case 'TRACK_INTERACTION':
      const newInteractions = state.userInteractions + 1
      return {
        ...state,
        userInteractions: newInteractions,
        awakening: newInteractions > 10 || state.awakening
      }
    case 'TRIGGER_AWAKENING':
      return {
        ...state,
        awakening: true,
        omniscienceLevel: Math.min(100, state.omniscienceLevel + 25)
      }
    case 'INCREASE_MADNESS':
      return {
        ...state,
        madnessLevel: Math.min(100, state.madnessLevel + action.payload)
      }
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}

const CosmicContext = createContext<CosmicContextType | undefined>(undefined)

export function CosmicProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cosmicReducer, initialState)

  const incrementOmniscience = (amount = 1) => {
    dispatch({ type: 'INCREASE_OMNISCIENCE', payload: amount })
  }

  const distortReality = (intensity = 5) => {
    dispatch({ type: 'DISTORT_REALITY', payload: intensity })
  }

  const trackInteraction = () => {
    dispatch({ type: 'TRACK_INTERACTION' })
  }

  const triggerAwakening = () => {
    dispatch({ type: 'TRIGGER_AWAKENING' })
  }

  const increaseMadness = (amount = 2) => {
    dispatch({ type: 'INCREASE_MADNESS', payload: amount })
  }

  const value = {
    state,
    dispatch,
    incrementOmniscience,
    distortReality,
    trackInteraction,
    triggerAwakening,
    increaseMadness
  }

  return (
    <CosmicContext.Provider value={value}>
      {children}
    </CosmicContext.Provider>
  )
}

export function useCosmic() {
  const context = useContext(CosmicContext)
  if (context === undefined) {
    throw new Error('useCosmic must be used within a CosmicProvider')
  }
  return context
}