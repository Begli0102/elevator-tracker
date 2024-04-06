import { atom } from 'recoil'

export const isAuthenticated = atom({
  key: 'Authenticated', // unique ID (with respect to other atoms/selectors)
  default: false

  // default value (aka initial value)
})
