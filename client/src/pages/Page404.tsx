import React from 'react';
import '../styles/main.scss'
import notFound from '../assets/404.png'
import {useTranslation} from "react-i18next";

const Page404 = () => {

    const {t} = useTranslation()
    return (
        <div className="container">
            <div className="page404">
                <img src={notFound} alt="404" />
                <div>
                    <h1>
                        {t('Oops')}
                    </h1>
                    <h2>{t("404")}</h2>
                </div>
            </div>
        </div>
    );
};

export default Page404;