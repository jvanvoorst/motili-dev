import React from 'react';

const CompanyLogo = () =>
    <img src="public/logo.svg" alt="company logo" style={style}></img>;

const style = {
    position: (window.innerWidth < '1380' ? 'relative' : 'fixed'),
    left: '40px',
    top: '40px'
};

export default CompanyLogo;
