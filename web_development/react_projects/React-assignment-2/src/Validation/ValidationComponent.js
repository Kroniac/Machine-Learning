import React from 'react'

const ValidationComponent = (props) => {
    let leny = null;

    if (props.len < 5) {
        leny = (
            <div>
                {
                    <p>Text Too Short</p>
                }
            </div>
        )
    }
    else if (props.len > 8) {
        leny = (
            <div>
                {
                    <p>Text Long Enough</p>
                }
            </div>
        )
    }
    if (props.len === 0) {
        leny = (
            <div>
                {
                    <p>Enter Some Text</p>
                }
            </div>
        )
    }


    return (
        <div>
            {leny}
        </div>
    );
}

export default ValidationComponent;
