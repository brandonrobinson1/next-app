'use client'
import React from 'react'

interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error }: Props)=> {
    console.log('error', Error)
  return (<>
    <div>
    
          An unexpected error has occured
      </div>
  <button className='btn'>Retry</button>
  </>
  )
}

export default ErrorPage
