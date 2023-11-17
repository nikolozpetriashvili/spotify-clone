'use client'

import { Database } from '@/types_db'
//This is a function provided by Supabase to create a client for authentication and database access.
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
//This is a component that provides the Supabase client through the React context API to its descendants.
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

//React.ReactNode is a TypeScript type that represents the various types of values that can be rendered in a React application. It is a union type that includes all possible types that React components can render or return.
interface SupabaseProviderProps {
  children: React.ReactNode;
}

//
const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children
}) => {
  const [supabaseClient] = useState(() => createClientComponentClient<Database>)

  return (
    <SessionContextProvider supabaseClient={supabaseClient()}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider;