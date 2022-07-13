import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const TitleText = ({ header }) => {
    return (
        <Fragment>
            <Helmet>
                <title>
                    {header}
                </title>
            </Helmet>
        </Fragment>
    );
};

export default TitleText;