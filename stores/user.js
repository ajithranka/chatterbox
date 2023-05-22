import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Ajith Ranka',
    role: 'IT',
    location: 'Home',
    department: 'D4',
    status: 'In a meeting',
    active: true,
  }),
})

export default useUserStore
