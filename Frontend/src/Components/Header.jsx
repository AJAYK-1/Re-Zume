import React from 'react'

function Header() {

    return (
        <header className='flex justify-between p-5'>
            <section>
                Re-Zume
            </section>

            <section className='gap-x-8'>
                <a href="#" className='p-2'> Option1 </a>
                <a href="#" className='p-2'> Option2 </a>
                <a href="#" className='p-2'> Option3 </a>
                <a href="#" className='p-2'> Login </a>
            </section>

        </header>
    )
}

export default Header