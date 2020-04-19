import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            
            <footer className="uk-text-small uk-text-light">
                Made by an <span role="img" aria-label="Alien">👽</span>, <span role="img" aria-label="Tiger">🐯</span>, and <a href="https://twitter.com/jkeatin" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>@jkeatin</a>. 3D Model was taken from a project made by <a href="https://twitter.com/alelepd" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>@alelepd</a> that was
                Rendered in Spline with ThreeJS. Show that project some <span role="img" aria-label="Purple Hert">💜</span> <a href="https://spline.design/coronavirus3d/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><span role="img" aria-label="Link">🔗</span></a>
            </footer>
        )
    }
};

export default Footer;