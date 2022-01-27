import React from 'react'


const HomeLayout = ({ children }) => {
  return (
    <div className='home-layout'>
      <div>
        { children }
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default HomeLayout;