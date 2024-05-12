import React from 'react'
import { SignIn, SignUp } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server'
import Home from '@/app/page';

const Protected = () => {
    // const { has } = auth();
    
    auth().protect()
    const {userId } = auth();
  return (
!userId ? <SignIn /> : <Home />
  )
}

export default Protected