//Zustand is a state management library for React that provides a simple and minimalistic API to manage state in your applications. It's designed to be flexible, lightweight, and easy to integrate into your React projects.
import { create } from 'zustand'

interface UploadModalStore{
  isOpen:boolean;
  onOpen:()=>void;
  onClose:()=>void;
}

const useUploadModal = create<UploadModalStore>((set) => ({
  isOpen:false,onOpen:() => set({isOpen:true}),onClose:()=>set({isOpen:false})
}))

export default useUploadModal;