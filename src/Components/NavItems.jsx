import React from 'react'

function NavItems() {
  return (
    <>
    <div class="hidden sm:flex items-center">
          <a href='/' class="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
            Home
          </a>
          <a href='#/about' class="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
            About
          </a>
          <a href='#/contact' class="mx-6 text-[#E3E4E6] hover:text-[#BC3CD8] active:text-[#BC3CD8] focus:text-[#BC3CD8]">
            Contact
          </a>
        </div>
    </>
  )
}

export default NavItems