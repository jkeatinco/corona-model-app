import React from 'react';
// import './BusinessList.css';
// import Business from '../Business/Business';

class Header extends React.Component {
    render() {
        return (
            <div className="uk-container uk-container-small uk-margin-large uk-text-light">
                <h1 className="uk-heading-xlarge uk-text-light">🤠 Howdy!</h1>
                <hr className="uk-divider-icon" />
                <p className="uk-text-small"> Tired of being stuck at 🏠, unable to hangout with the world's most famous 🦠 without getting 🤒? Well... you are in luck! Take an Augment Reality photo with COVID-19 while maintaining safe social distancing. Just press on the button that shows up on the 3D model below and you are all set!</p>
                <button className="uk-button uk-button-default uk-margin" uk-toggle="target: #my-id" type="button">See an example 📸👽🐶</button>
            </div>
        )
    }
};

export default Header;