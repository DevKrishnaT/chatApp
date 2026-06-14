import { create } from 'zustand'

const useChat = create((set) => ({
    id:0,
    setId: (id) => set({ id }),
}))

export default useChat;