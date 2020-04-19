import React from 'react';

class CopyButton extends React.Component {

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
            <div>
                {
                    /* Logical shortcut for only displaying the 
                       button if the copy command exists */
                    document.queryCommandSupported('copy') &&
                    <div className="uk-margin-large uk-margin-large-top">
                        <p className="uk-margin uk-text-small uk-text-light">You have to have an AR compatible 📱 to be able to take 📸 with the Coronavirus 3D Model. You also have to make sure you are in your 📱's default browser, like Safari/Chrome and not visiting this link in facebook's/twitter's/instagram's/ web browser. Sorry 😥! Just copy the link below and open it in Safar/Chrome and you should be ready to go!</p>
                        <button className="uk-button uk-button-default" onClick={this.copyToClipboard}>Copy Website 🔗</button><br></br><br></br>
                        {this.state.copySuccess}
                    </div>
                }
                <form>
                    <textarea
                        ref={(textarea) => this.textArea = textarea}
                        value='https://corona-model-app.onrender.com/'
                        className="uk-textarea"
                    />
                </form>
            </div>
        );
    }

}

export default CopyButton;