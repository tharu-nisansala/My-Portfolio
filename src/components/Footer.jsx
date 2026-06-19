import React from 'react'

function Footer() {

    const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-emerald-800 text-white font-semibold text-center py-4 relative z-20">
  © {year} Tniz. All rights reserved.
</footer>

  )
}

export default Footer