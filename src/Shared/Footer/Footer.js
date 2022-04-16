import React from 'react';

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div>
            <footer className="text-center text-gray mt-5">
                <p>
                    <small>Copyright © {year}</small>
                </p>
            </footer>
        </div>
    );
};

export default Footer;