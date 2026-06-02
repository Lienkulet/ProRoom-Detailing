import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 py-10 md:px-10 md:py-16">
      {children}
    </div>
  )
}

export default Container