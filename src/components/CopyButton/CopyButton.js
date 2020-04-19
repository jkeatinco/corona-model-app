import React from 'react';

class CopyButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = { copySuccess: '' }
        
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: ' You did it 🙌! Now just switch to Safari/Chrome and paste this magical link in the browser address bar. The button on the 3D Coronavirus Model should show up now 🤞!' });
    };

    render() {
        return (
            <div>
                {

                    document.queryCommandSupported('copy') &&
                    <div className="uk-margin-medium uk-margin-medium-top">
                        <p className="uk-margin uk-text-small uk-text-light">Just press on the button that shows up on the 3D model above and you are all set! Make sure you are in your <span role="img" aria-label="Phone">📱</span>'s default browser, like Safari/Chrome and not visiting this website in Facebook's/Twitter's/Instagram's/ web browser. They do not support fun like this yet, sorry <span role="img" aria-label="Sad Smiley Face">😥</span>! Just copy the link below and open it in Safari/Chrome and you should be ready to go!</p>
                        <button className="uk-button uk-button-default" onClick={this.copyToClipboard}>Copy Website <span role="img" aria-label="Link">🔗</span></button>
                        <p className="uk-margin uk-text-small uk-text-light">{this.state.copySuccess}</p>
                    </div>
                }
                <form>
                    <textarea
                        ref={(textarea) => this.textArea = textarea}
                        value='https://corona-model-app.onrender.com/'
                        className="uk-textarea uk-text-small uk-text-light"
                        readOnly
                    />
                </form>
                <p className="uk-margin uk-text-small uk-text-light">If you are still having issues your <span role="img" aria-label="Phone">📱</span> is probably not be AR compatible. Might be time for an upgrade!</p>
            </div>
        );
    }

}

export default CopyButton;