import React, { Component } from 'react';
import Image from 'next/image'
import LogoAndName from '/components/shared/LogoAndName';

class LadingText extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <LogoAndName />
            </div>
        )
    }
}

export default LadingText;