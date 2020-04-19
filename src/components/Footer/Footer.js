import React from 'react';
// import './Business.css';

// const business = {
//     imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// };

class Footer extends React.Component {
    render() {
        return (
            
                <footer className="uk-text-small">
                Made by an 👽, 🐯, and <a href="https://twitter.com/jkeatin" target="_blank" style={{ textDecoration: 'none' }}>@jkeatin</a>. 3D Model from project made by <a href="https://twitter.com/alelepd" target="_blank" style={{ textDecoration: 'none' }}>@alelepd</a> that was
                    Rendered in Spline with ThreeJS. Show that project some 💜 <a href="https://spline.design/coronavirus3d/" target="_blank" style={{ textDecoration: 'none' }}>🔗</a>
                </footer>
        )
    }
};

export default Footer;