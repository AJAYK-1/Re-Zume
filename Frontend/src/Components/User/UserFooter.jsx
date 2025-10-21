import React from 'react'

function UserFooter() {
    return (
        <footer className='bg-[#100b1c] text-center font-poppins text-white text-lg p-2 h-15 w-full'>
            © {new Date().getFullYear()} Re-Zume | All rights Reserved.
        </footer>
    )
}

export default UserFooter