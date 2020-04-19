import React from 'react';

class AlienModal extends React.Component {

    render() {
        return (

            
            <div id="my-id" uk-modal="true">
                
                <div className="uk-modal-dialog uk-modal-body">
                    <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                    <h2 className="uk-modal-title uk-margin"><span role="img" aria-label="Alien">👽</span> + COVID-19 <span role="img" aria-label="Camera">📸</span></h2>
                    <p className="uk-margin uk-text-small uk-text-light">Poor little guy forgot to wear a <span role="img" aria-label="Sick Smiley Face">😷</span>.</p>
                    <img className="uk-margin" src="alien-example.JPG" width="" height="" alt="Alien/Puppy Coronavirus AR" uk-img="true"></img>
                    <button className="uk-margin uk-button uk-button-default uk-modal-close" type="button">Close</button>
                </div>
            </div>


        );
    }

}

export default AlienModal;