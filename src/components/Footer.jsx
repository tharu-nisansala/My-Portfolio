import React from 'react'

function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#e38a05] to-[#b86a05] text-black font-semibold text-center py-4 ">
  © {year} Tniz. All rights reserved.
</footer>

  )
}

export default Footer