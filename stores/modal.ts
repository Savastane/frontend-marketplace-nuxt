import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: (): { isModalVisible: boolean } => ({
    isModalVisible: false
  }),
  actions: {
    showModal() {      
      this.isModalVisible = true
    },
    hideModal() {
      this.isModalVisible = false
    }
  }
})