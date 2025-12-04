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
  Dialog,
  DialogContent,
  Paper,
  Grid,
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
  School,
  CalendarToday,
  ZoomIn,
  ArrowBackIos,
  ArrowForwardIos,
  Image as ImageIcon,
} from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggle from './components/ThemeToggle';
import skills from './components/Skills';
import { projects } from './data/projects';
import { certificates } from './data/certificates';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TimelineIcon from '@mui/icons-material/Timeline';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Portfolio() {
  const t = useTranslations();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const menuItems = [
    { key: 'home', label: t('home') },
    { key: 'about', label: t('about') },
    { key: 'skills', label: t('skills') },
    { key: 'projects', label: t('projects') },
    { key: 'certificates', label: t('certificates') },
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
            maxWidth="xl"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography
              variant="h6"
              sx={{
                cursor: 'pointer', color: 'text.primary', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0.5,
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                  target='_blank'
                  href="https://github.com/Bobur815/"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <GitHub />
                </IconButton>
                <IconButton
                  component={Link}
                  target='_blank'
                  href="https://www.linkedin.com/in/boburmirzo-ergashev-a2a035367/"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  component={Link}
                  target='_blank'
                  href="mailto:ergashevboburmirzo815@gmail.com"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <Email />
                </IconButton>
                <IconButton
                  component={Link}
                  target='_blank'
                  href="https://t.me/bobursdasturinfo"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <Telegram />
                </IconButton>
                <IconButton
                  component={Link}
                  target='_blank'
                  href="https://leetcode.com/u/bobur_ergashev/"
                  sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                >
                  <Code />
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

      {/* About Me Section */}
      <Box id="about" sx={{ py: 12, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            {t('about_me')}
          </Typography>
          <Grid container spacing={8} alignItems="center">

            {/* Left Side: The Hook & Visuals */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 'bold', letterSpacing: 2 }}
              >
                {t('about_me_short')}
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 2, mb: 4, lineHeight: 1.2 }}>
                {t('about_headline')}
              </Typography>

              {/* Optional: Add a stylized image or abstract shape here */}
              <Box
                sx={{
                  width: '100px',
                  height: '4px',
                  bgcolor: 'primary.main',
                  mb: 4
                }}
              />
            </Grid>

            {/* Right Side: The Details & Stats */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={4}>

                {/* "Offline" Section */}
                <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, borderLeft: '4px solid', borderColor: 'secondary.main' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {t('hobby_label')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('hobby_text')}
                  </Typography>
                </Box>

              </Stack>
            </Grid>
          </Grid>
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
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>
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
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
                    {t(project.title)}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {t(project.description)}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    {project.github && project.github !== '#' && (
                      <Button
                        component={Link}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHub />}
                        size="small"
                        variant="outlined"
                      >
                        {t('code')}
                      </Button>
                    )}
                    {project.live !== '#' && (
                      <Button
                        component={Link}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<Launch />}
                        size="small"
                        variant="contained"
                      >
                        {t('live_demo')}
                      </Button>
                    )}
                    {project.admin_dashboard && project.admin_dashboard.length > 0 && (
                      <Button
                        onClick={() => {
                          setGalleryImages(project.admin_dashboard || []);
                          setCurrentImageIndex(0);
                        }}
                        startIcon={<ImageIcon />}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                          '&:hover': {
                            borderColor: 'secondary.dark',
                            backgroundColor: 'rgba(156, 39, 176, 0.08)',
                          }
                        }}
                      >
                        Galery
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Certificates Section */}
      <Box id="certificates" sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 2 }}>
            {t('certificates_credentials')}
          </Typography>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4
          }}>
            {certificates.map((cert, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 400,
                    overflow: 'hidden',
                    backgroundColor: 'grey.100',
                    cursor: 'pointer',
                    '&:hover .zoom-overlay': {
                      opacity: 1,
                    },
                  }}
                  onClick={() => setFullscreenImage(cert.image)}
                >
                  <Image
                    src={cert.image}
                    alt={t(cert.title)}
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    className="zoom-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <ZoomIn sx={{ fontSize: 60, color: 'white' }} />
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <School sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography variant="h6" fontWeight="600">
                      {t(cert.title)}
                    </Typography>
                  </Stack>
                  {cert.score && (
                    <Chip
                      label={cert.score}
                      size="small"
                      sx={{
                        mb: 2,
                        backgroundColor: 'rgba(76, 175, 80, 0.1)',
                        color: 'success.main',
                        fontWeight: 600,
                      }}
                    />
                  )}
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <School sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {t('issued_by')}: {t(cert.issuer)}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {t(cert.date)}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Fullscreen Image Dialog */}
      <Dialog
        open={fullscreenImage !== null}
        onClose={() => setFullscreenImage(null)}
        maxWidth={false}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            boxShadow: 'none',
            margin: 0,
            maxHeight: '100vh',
            width: '100vw',
          },
        }}
      >
        <IconButton
          onClick={() => setFullscreenImage(null)}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 0,
            overflow: 'hidden',
          }}
        >
          {fullscreenImage && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={fullscreenImage}
                alt="Certificate"
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Gallery Dialog */}
      <Dialog
        open={galleryImages.length > 0}
        onClose={() => setGalleryImages([])}
        maxWidth={false}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            boxShadow: 'none',
            margin: 0,
            maxHeight: '100vh',
            width: '100vw',
          },
        }}
      >
        <IconButton
          onClick={() => setGalleryImages([])}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Previous Button */}
        {galleryImages.length > 1 && (
          <IconButton
            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <ArrowBackIos sx={{ ml: 1 }} />
          </IconButton>
        )}

        {/* Next Button */}
        {galleryImages.length > 1 && (
          <IconButton
            onClick={() => setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
              zIndex: 1,
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        )}

        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 0,
            overflow: 'hidden',
          }}
        >
          {galleryImages.length > 0 && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={`/${galleryImages[currentImageIndex]}`}
                alt={`Admin Dashboard ${currentImageIndex + 1}`}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          )}

          {/* Image Counter */}
          {galleryImages.length > 1 && (
            <Typography
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
              }}
            >
              {currentImageIndex + 1} / {galleryImages.length}
            </Typography>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 10, backgroundColor: 'background.paper' }}>
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
              href="mailto:ergashevboburmirzo815@gmail.com"
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
              Email
            </Button>
            <Button
              component={Link}
              href="https://www.linkedin.com/in/boburmirzo-ergashev-a2a035367/"
              variant="outlined"
              target='_blank'
              startIcon={<LinkedIn />}
              size="large"
            >
              {t('linkedin')}
            </Button>
            <Button
              component={Link}
              href="https://t.me/Bobur_AbuAbdulaziz"
              variant="outlined"
              target='_blank'
              startIcon={<Telegram />}
              size="large"
            >
              {t('telegram')}
            </Button>
            <Button
              component={Link}
              href="https://leetcode.com/u/bobur_ergashev/"
              variant="outlined"
              target='_blank'
              startIcon={<Code />}
              size="large"
            >
              {t('leetcode')}
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