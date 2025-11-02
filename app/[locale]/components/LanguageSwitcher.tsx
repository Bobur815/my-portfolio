'use client';

import React, { useState } from 'react';
import { 
  Button, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText,
  Chip 
} from '@mui/material';
import { Language, ExpandMore } from '@mui/icons-material';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LanguageSwitcher: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const params = useParams();
  const t = useTranslations();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
  ];

  const currentLocale = (params.locale as string) || 'en';
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (langCode: string) => {
    router.push(`/${langCode}`);
    handleClose();
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClick}
        startIcon={<Language />}
        endIcon={<ExpandMore />}
        size="small"
        sx={{
          minWidth: 'auto',
          textTransform: 'none',
          color: 'text.primary',
          borderColor: 'divider',
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'action.hover',
          }
        }}
      >
        <Chip
          label={currentLanguage.flag}
          size="small"
          sx={{ 
            ml: 0.5, 
            fontSize: '1rem',
            backgroundColor: 'transparent',
            border: 'none'
          }}
        />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === currentLocale}
          >
            <ListItemIcon>
              <span style={{ fontSize: '1.2rem' }}>{language.flag}</span>
            </ListItemIcon>
            <ListItemText primary={language.name} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;