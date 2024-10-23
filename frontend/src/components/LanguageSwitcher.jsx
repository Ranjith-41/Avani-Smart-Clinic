// src/components/LanguageSwitcher.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button } from 'react-bootstrap';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ButtonGroup aria-label="Language switcher">
      <Button variant="secondary" onClick={() => changeLanguage('en')}>EN</Button>
      <Button variant="secondary" onClick={() => changeLanguage('ta')}>தமிழ்</Button>
    </ButtonGroup>
  );
};

export default LanguageSwitcher;
