import { atom } from 'recoil'

export const authTokenState = atom({
  key: 'authTokenState',
  default: localStorage.getItem('authToken') || null
})

export const sidebarState = atom({
  key: 'sidebarState',
  default: false
})
