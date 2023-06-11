import { create } from 'zustand'

export const useBookStore = create((set) => ({
    value: 'cat',
    updateValue: (newValue) => set({ value: newValue })
}))