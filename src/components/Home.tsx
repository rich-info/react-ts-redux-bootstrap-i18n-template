import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import reactIconImage from '../assets/img/react_icon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = (props: any) => {

    const { t } = useTranslation();
    //const changeLanguage = (language: string) => i18n.changeLanguage(language);

    return (
        <>
            <div className="row">
                <div className="col">
                    <h2>{t("titleHome")}</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    React TypeScript Demo
                    <br />
                    <br />
                    <h4>{t("withWordBig")} Redux</h4>
                    <h4>... Bootstrap</h4>
                    <h4>... Font Awesome</h4>
                    <h4>... Internationalization (i18n)</h4>
                    <h4>... REST Call Demo</h4>
                    <h4>... etc.</h4>
                </div>
                <div className="col">
                    <img src={reactIconImage} className="card-img-top" alt="Icon"></img>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>{t("MoreInfo")}</h2>
                    <a href="https://github.com/rich-info" title=""><FontAwesomeIcon icon={faGithub} /> Github</a><br />
                    <a href="https://github.com/rich-info/react-ts-redux-bootstrap-i18n-template" title=""><FontAwesomeIcon icon={faGithub} /> Github</a><br />
                </div>
            </div>
        </>
    );
};

export default connect()(Home);