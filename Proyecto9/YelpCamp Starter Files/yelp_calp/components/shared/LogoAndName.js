import React, { Component } from 'react';
import Image from 'next/image'
import Link from 'next/link';

class LogoAndName extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Link href="/">
                <a>
                    <img
                        src="/Assets/Logo.svg"
                        alt="logo"
                    />
                </a>
            </Link>
        )
    }
}

export default LogoAndName;