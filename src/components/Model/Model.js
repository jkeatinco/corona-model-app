import React from 'react';

class Model extends React.Component {

    render() {
        return (

            <div className="corona-model uk-margin-medium-bottom">
                <model-viewer style={{ margin: 'auto'}} src="coronavirus3d.glb" ios-src="coronavirus3d.usdz" ar auto-rotate camera-controls
                background-color="#70BCD1" shadow-intensity="1" alt="A 3D model of coronavirus" />
           </div>

        )
    }
}

export default Model;