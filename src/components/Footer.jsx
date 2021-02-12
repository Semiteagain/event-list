import React from 'react'

function Footer() {
    const d = new Date();
    const currentYear = d.getFullYear()
    return (
        <div>
            <footer> &copy; {currentYear}</footer>
        </div>
    )
}

export default Footer
