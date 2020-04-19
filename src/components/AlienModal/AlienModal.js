import React from 'react';

class AlienModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = { copySuccess: '' }
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: ' You did it! 🙌' });
    };

    render() {
        return (

            
            <div id="my-id" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title uk-margin">👽🐶 AR COVID-19 📸</h2>
                    <p className="uk-margin uk-text-small uk-text-light">Poor little guy forgot to where a 😷</p>
                    <img className="uk-margin" src="alien-example.JPG" width="" height="" alt="Alien Coronavirus AR Photo" uk-img></img>
                    <button className="uk-margin uk-button uk-button-default uk-modal-close" type="button">Close</button>
                </div>
            </div>


        );
    }

}

export default AlienModal;