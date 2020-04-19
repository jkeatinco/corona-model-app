import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <div className="uk-container uk-container-small uk-margin-medium uk-text-light">
                <h1 className="uk-heading-xlarge uk-text-light"><span role="img" aria-label="Cowboy Smiley">🤠</span> Howdy!</h1>
                <hr className="uk-divider-icon" />
                <p className="uk-text-small uk-margin-medium"> Tired of being stuck at <span role="img" aria-label="House">🏠</span> and unable to hangout with the world's most famous <span role="img" aria-label="Virus">🦠</span> without getting <span role="img" aria-label="Smiley Face with Thermometer">🤒</span>? Well... guess what!? You are in luck! Now you can take an Augmented Reality photo with COVID-19 while saving lives and still maintaining safe social distancing.</p>
                <button className="uk-button uk-button-default" uk-toggle="target: #my-id" type="button">CHECK OUT AN EXAMPLE <span role="img" aria-label="Camera">📸</span><span role="img" aria-label="Alien">👽</span><span role="img" aria-label="Dog">🐶</span></button>
            </div>
        )
    }
};

export default Header;