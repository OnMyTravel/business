import React from 'react';

const Modale = ({ title, subtitle }) => {


    let modaleTitle;

    if(subtitle)
        modaleTitle = (<div className="modale-title">
            {title}
            <div className="modale-subtitle">{', ' + subtitle}</div>
        </div>);
    else
        modaleTitle = (<div className="modale-title">
            {title}
        </div>);

    return (
        <div className="charte__frame">
            <div className="modale">

                {modaleTitle}

                <div className="modale-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor a libero laoreet
                    vulputate in commodo arcu. Sed felis lorem, molestie vitae accumsan vitae, sollicitudin sed nibh.
                    Quisque at imperdiet erat, scelerisque tempus sem. Quisque vehicula ultrices nulla, vitae interdum
                    dui. Pellentesque eu pulvinar urna. Vestibulum at mauris sed velit elementum faucibus. Nam quis
                    massa libero. Fusce at dui ut ipsum auctor efficitur.
                </div>
            </div>
        </div>
    );
}

export default Modale