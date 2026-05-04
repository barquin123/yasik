import UserFooter from '@/src/components/UserFooter'
import UserHeader from '@/src/components/UserHeader'
import React from 'react'

export default function layout({children} : {children:React.ReactNode}) {
  return (
    <>
    <UserHeader/>
    <main>
        {children}
    </main>
    <UserFooter/>
    </>
  )
}
