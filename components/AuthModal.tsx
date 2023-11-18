'use client'

import { useRouter } from 'next/navigation';
import Modal from './Modal';
import {useSupabaseClient,useSessionContext } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import useAuthModal from '@/hooks/useAuthModal';
import { useEffect } from 'react';

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const {onClose,isOpen} = useAuthModal();

  const onChange = (open: boolean) => {
    if(!isOpen) {
      onClose();
    }
  }

  useEffect(() => {
    if(session) {
      router.refresh();
      onClose();
    }
  },[session,router,onClose])

  return (
    <>
    <Modal title='Welcome back'
    description='Login to your account'
    isOpen={isOpen}
    onChange={onClose}>
      <Auth 
        theme='dark'
        magicLink={true}
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22cc55e'
              }
            }
          }
        }}
      />
    </Modal>
    </>
  )
}

export default AuthModal;