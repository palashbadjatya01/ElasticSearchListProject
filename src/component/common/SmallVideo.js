import React from 'react';
import '../common/Styles.css';

function SmallVideo(props) {
    let iframeId = 'kmsembed-' + props.kalturaAsset.entryId
    let src = "https://mediaspace.illinois.edu/embed/secure/iframe/entryId/" + props.kalturaAsset.entryId + "/uiConfId/26883701"
    let width = props.width? props.width: "350"
    let height = props.height? props.height: "200"
    return (
        <div>
            <iframe 
                id={iframeId}
                width={width}
                height={height}
                src={src}
                className="kmsembed"
                allow="autoplay *; fullscreen *; encrypted-media *"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                frameBorder="0"
                title="Kaltura Player"></iframe>
            <h4>{props.kalturaAsset.title}</h4>
            <p className="VideoPlayerTitleDescription">{props.kalturaAsset.description}</p>
        </div>
    )
}
export default SmallVideo;