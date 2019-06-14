import React from 'react';

const BoxComponent = () => {

    return (
        <div className="box">
            <div className="row box-header">
                <div className="col-small-12 col-medium-4 col-4">
                    <img className="p-card__thumbnail" src="https://assets.ubuntu.com/v1/dca2e4c4-raspberry-logo.png" alt="header" />
                </div>
                <div className="col-small-12 col-medium-8 col-8">
                    <nav className="p-tabs">
                        <ul className="p-tabs__list" role="tablist">
                            <li className="p-tabs__item" role="presentation">
                                <a href="#section1" className="p-tabs__link" tabIndex="0" role="tab" aria-controls="section1" aria-selected="true">Machine summary</a>
                            </li>
                            <li className="p-tabs__item" role="presentation">
                                <a href="#section2" className="p-tabs__link" tabIndex="-1" role="tab" aria-controls="section2">Interfaces</a>
                            </li>
                            <li className="p-tabs__item" role="presentation">
                                <a href="#section3" className="p-tabs__link" tabIndex="-1" role="tab" aria-controls="section3">Storage</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className="u-sv1" />
            <h3 className="p-card__title">Raspberry Pi2 and Pi3</h3>
            <p className="p-card__content">For fun, for education and for profit, the RPi makes device development personal and entertaining. With support for both the Pi2 and the new Pi3, Ubuntu Core supports the world’s most beloved board.</p>
        </div>
    );

}

export default BoxComponent;