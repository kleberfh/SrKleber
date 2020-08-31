import React from 'react';

import './styles.css';

import {ReactComponent as Waves} from '../../Assets/Icons/curved_bottom.svg';

const Footer = () => {
    return (
        <div className={'footer_container'}>
            <Waves className={'waves_divisor'} />
            <p className={'footer_label'}>© Designed & Developed by Kleber Fernando</p>
        </div>
    )
}

export default Footer;
