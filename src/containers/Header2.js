import React from 'react';
import {Header} from '../components';

export function HeaderContainer2({children}) {
    return (
        <Header>
            <Header.Inner>
                <Header.Logo to="/" src="/pictures/spree-image.png" />
            </Header.Inner> 
            {children}
        </Header>
    )
}