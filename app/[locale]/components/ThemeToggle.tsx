'use client';

import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useThemeMode } from '../theme/ThemeProvider';
import { useTranslations } from 'next-intl';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeMode();
  const t = useTranslations();

  return (
    <Tooltip title={t('toggle_theme')}>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        size="medium"
        sx={{
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'action.hover',
          }
        }}
      >
        {isDarkMode ? <LightMode /> : <DarkMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;