import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/main.scss'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        if (i18n.language === 'en') {
            i18n.changeLanguage('ru').then();
        } else {
            i18n.changeLanguage('en').then();
        }
    };

    return (
        <button className="language-switcher" onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'English' : 'Русский'}
        </button>
    );
};

export default LanguageSwitcher;
