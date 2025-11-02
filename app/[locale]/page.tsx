// app/[locale]/page.tsx
'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
  Fab,
  Zoom,
  Link,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  GitHub,
  LinkedIn,
  Email,
  Launch,
  Code,
  Storage,
  Smartphone,
  Telegram,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggle from './components/ThemeToggle';
import skills from './components/Skills';
import { projects } from './data/projects';

export default function Portfolio() {
  const t = useTranslations();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    { key: 'home', label: t('home') },
    { key: 'about', label: t('about') },
    { key: 'skills', label: t('skills') },
    { key: 'projects', label: t('projects') },
    { key: 'contact', label: t('contact') },
  ];

  

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsDrawerOpen(false);
  };

  const NavigationDrawer = () => (
    <Drawer
      anchor='top'
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{
          color: 'text.primary', cursor: 'pointer', display: 'flex', alignItems: 'center',
          gap: 0.7, background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
          onClick={() => scrollToSection('home')}>
          <Typography>
            {'<'}
          </Typography>
          {t('name')}
          <Typography>
            {'/>'}
          </Typography>
        </Typography>
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {menuItems.map((item) => (
          <ListItem key={item.key} disablePadding sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <ListItemButton onClick={() => scrollToSection(item.key)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2, gap: 2, display: 'flex', justifyContent: 'center' }}>
        <LanguageSwitcher />
        <ThemeToggle />
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Navigation */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'background.paper',
          backdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow: 'none'
        }}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth="lg"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography
              variant="h6"
              sx={{
                cursor: 'pointer', color: 'text.primary', display: 'flex', alignItems: 'center', gap: 0.7,
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              onClick={() => scrollToSection('home')}
            >
              <Typography >
                {'<'}
              </Typography>
              {t('name')}
              <Typography>
                {'/>'}
              </Typography>
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.key}
                    color="inherit"
                    onClick={() => scrollToSection(item.key)}
                    sx={{ color: 'text.primary' }}
                  >
                    {item.label}
                  </Button>
                ))}
                <LanguageSwitcher />
                <ThemeToggle />
              </Box>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <NavigationDrawer />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          pt: 8,
          background: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  display: { xs: 'flex' },
                  justifyContent: { xs: 'center' },
                  alignItems: { xs: 'center', md: 'flex-start' },
                  flexDirection: { xs: 'column' },
                }}
              >
                {t('hero_title')}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'block',
                  }}
                >
                  {t('hero_title_highlight')}
                </Box>
                {t('hero_title_suffix')}
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.6 }}
              >
                {t('description')}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1d4ed8, #7c3aed)',
                    }
                  }}
                >
                  {t('view_projects')}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                >
                  {t('contact_me')}
                </Button>
              </Stack>

              <Stack direction="row" spacing={2}
                sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center' }}
              >
                <IconButton
                  component={Link}
                  href="#"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component={Link}
                  href="#"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component={Link}
                  href="#"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  component={Link}
                  href="#"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <Telegram />
                </IconButton>
              </Stack>
            </Box>

            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <Avatar
                sx={{
                  width: { xs: 250, md: 350 },
                  height: { xs: 250, md: 350 },
                  border: `4px solid ${theme.palette.primary.main}`,
                }}
              >
                <Image
                  src="/Hero_Picture.jpg"
                  alt={t('name')}
                  width={350}
                  height={350}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Avatar>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: 10,
          backgroundColor: 'background.paper',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            {t('about_me')}
          </Typography>
          <Stack spacing={4}>
            <Typography variant="body1" color="text.secondary">
              {t('about_me_description')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('my_journey')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('when_not_coding')}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            {t('skills_technologies')}
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4
          }}>
            {skills.map((skill, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                    borderColor: 'primary.main',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    <Box sx={{ color: 'primary.main' }}>{skill.icon}</Box>
                    <Typography variant="h5" fontWeight="600">
                      {skill.title}
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    {skill.items.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                          }}
                        />
                        <Typography color="text.secondary">{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            {t('featured_projects')}
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4
          }}>
            {projects.map((project, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
                    {t(project.title)}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    {t(project.description)}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'background.default',
                          color: 'primary.main',
                          border: `1px solid ${theme.palette.primary.main}`,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Button
                      component={Link}
                      href={project.github}
                      startIcon={<GitHub />}
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      {t('code')}
                    </Button>
                    <Button
                      component={Link}
                      href={project.live}
                      startIcon={<Launch />}
                      size="small"
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      {t('live_demo')}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" sx={{ mb: 3 }}>
            {t('get_in_touch')}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            sx={{ mb: 6 }}
          >
            {t('get_in_touch_description')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              href="mailto:your.email@example.com"
              variant="contained"
              startIcon={<Email />}
              size="large"
              sx={{
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #1d4ed8, #7c3aed)',
                }
              }}
            >
              {t('email_me')}
            </Button>
            <Button
              component={Link}
              href="#"
              variant="outlined"
              startIcon={<LinkedIn />}
              size="large"
            >
              {t('linkedin')}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Typography color="text.secondary">
          {t('copyright')} • {t('built_with')}
        </Typography>
      </Box>
    </Box>
  );
}