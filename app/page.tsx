'use client';

import React from 'react';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Link as MuiLink,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  TextField,
  IconButton,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <MuiLink
    href={href}
    underline="none"
    color="text.secondary"
    sx={{ fontWeight: 600, '&:hover': { color: 'text.primary' } }}
  >
    {children}
  </MuiLink>
);

const Section = ({
  id,
  children,
  sx = {} as any,
}: {
  id?: string;
  children: React.ReactNode;
  sx?: any;
}) => (
  <Box
    id={id}
    component="section"
    sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: 96, ...sx }}
  >
    {children}
  </Box>
);

export default function Page() {
  const isSmall = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        background: 'radial-gradient(60% 80% at 50% 0%, rgba(91,124,250,0.25) 0%, rgba(0,0,0,0) 70%)'

      }}>
      {/* Header sticky*/}
      <AppBar position="fixed" elevation={0} >
        <Toolbar sx={{ gap: 3, py: 1.5 }}>
          <Stack direction="row" alignItems="center" sx={{ flexGrow: 1 }}>
            <Image
              src="/logo.svg"
              alt="Flowly logo"
              width={32}
              height={32}
              style={{ marginRight: 8 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              <NavLink href="#">Flowly</NavLink>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavLink href="#features">Fonctionnalités</NavLink>
            <NavLink href="#why-flowly">Pourquoi Flowly ?</NavLink>
            <NavLink href="#pricing">Tarifs</NavLink>
            <NavLink href="#testimonials">Témoignages</NavLink>
            <NavLink href="#">Connexion</NavLink>
          </Stack>

          <Button
            href="#pricing"
            variant="contained"
            color="primary"
            size={isSmall ? 'small' : 'medium'}
            sx={{ borderRadius: 2 }}
          >
            Essayer gratuitement
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* Hero */}
        <Section sx={{ pt: { xs: 6, md: 10 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Chip
                  label="Spécial freelances"
                  color="secondary"
                  variant="outlined"
                  sx={{ width: 'fit-content' }}
                />
                <Typography variant="h2" component="h1" gutterBottom sx={{ lineHeight: 1.1 }}>
                  Automatisez vos tâches.
                  <br /> Restez concentré sur l&#39;essentiel.
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Flowly vous permet de créer des <strong>workflows sans coder</strong> pour tout automatiser : envoyer une facture après une mission, programmer un appel après un formulaire, ou relancer un client automatiquement.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    href="#get-started"
                    variant="contained"
                    size="large"
                    startIcon={<PlayArrowRoundedIcon />}
                    sx={{ borderRadius: 2 }}
                  >
                    Créer mon premier workflow
                  </Button>
                  <Button
                    href="#features"
                    variant="outlined"
                    size="large"
                    sx={{ borderRadius: 2 }}
                    endIcon={<LaunchIcon />}
                  >
                    Voir les fonctionnalités
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            {/* Conceptual Illustration */}

            <Grid item size={4} xs={12} md={6}>
              <WorkflowCard
                title="Onboarding client"
                steps={[
                  { icon: <DesignServicesRoundedIcon />, title: "Contrat signé", subtitle: "Déclencheur" },
                  { icon: <EmailRoundedIcon />, title: "Envoyer email de bienvenue", subtitle: "Automatique" },
                  { icon: <EventAvailableRoundedIcon />, title: "Planifier un appel d'intro", subtitle: "Calendrier partagé" },
                  { icon: <ReceiptLongRoundedIcon />, title: "Créer un dossier client", subtitle: "Notion / Google Drive" },
                ]}
              />
            </Grid>

            <Grid item size={4} xs={12} md={6}>
              <WorkflowCard
                title="Gestion des paiements"
                steps={[
                  { icon: <ReceiptLongRoundedIcon />, title: "Paiement reçu", subtitle: "Stripe / PayPal" },
                  { icon: <EmailRoundedIcon />, title: "Envoyer le reçu", subtitle: "Email client" },
                  { icon: <DesignServicesRoundedIcon />, title: "Mettre à jour la compta", subtitle: "Notion / Excel" },
                  { icon: <NotificationsActiveRoundedIcon />, title: "Notifier sur Slack", subtitle: "Canal #finance" },
                ]}
              />
            </Grid>

            <Grid item size={4} xs={12} md={6}>
              <WorkflowCard
                title="Relances marketing"
                steps={[
                  { icon: <DesignServicesRoundedIcon />, title: "Devis envoyé", subtitle: "Déclencheur" },
                  { icon: <EmailRoundedIcon />, title: "Relance J+3", subtitle: "Email personnalisé" },
                  { icon: <EmailRoundedIcon />, title: "Relance J+7", subtitle: "Deuxième email" },
                  { icon: <EventAvailableRoundedIcon />, title: "Proposer un appel", subtitle: "Calendrier partagé" },
                ]}
              />
            </Grid>

          </Grid>
        </Section>

        {/* Features */}
        <Section id="features">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Tout pour automatiser sans coder
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Conçu pour les indépendants — simple, clair, et efficace.
          </Typography>

          <Grid
            container
            spacing={3}
            alignItems="stretch"
            sx={{
              '& > .MuiGrid-item': { display: 'flex' }, // ceinture et bretelles
            }}
          >
            <FeatureCard
              icon={<DragIndicatorRoundedIcon />}
              title="Builder drag & drop"
              description="Assemblez vos étapes en quelques clics, sans script ni ligne de code."
            />
            <FeatureCard
              icon={<ReceiptLongRoundedIcon />}
              title="Modèles prêts à l&#39;emploi"
              description="Facturation, relance, onboarding… démarrez en 30 secondes."
            />
            <FeatureCard
              icon={<ExtensionRoundedIcon />}
              title="Intégrations essentielles"
              description="Notion, Gmail, Google Calendar, Slack et plus à venir."
            />
            <FeatureCard
              icon={<NotificationsActiveRoundedIcon />}
              title="Notifications intelligentes"
              description="Restez informé au bon moment, sur le bon canal."
            />
            <FeatureCard
              icon={<LockOpenRoundedIcon />}
              title="Zéro code, zéro friction"
              description="Interface intuitive, prise en main immédiate pour non-tech."
            />
            <FeatureCard
              icon={<TrendingUpRoundedIcon />}
              title="Gagnez des heures chaque semaine"
              description="Automatisez le répétitif et concentrez-vous sur la valeur."
            />
          </Grid>
        </Section>

        <Section id="why-flowly">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Pourquoi Flowly ?
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Des fonctionnalités pensées pour les freelances, pas pour les grosses boîtes.
          </Typography>

          <Grid container spacing={3}>
            {[
              { icon: <BoltRoundedIcon />, title: 'Gagnez du temps', description: 'Réduisez le travail manuel et les oublis.' },
              { icon: <CodeRoundedIcon />, title: 'Zéro code', description: 'Aucune compétence technique requise.' },
              { icon: <DesignServicesRoundedIcon />, title: 'Simple & intuitif', description: 'Pensé pour les besoins des freelances.' },
              { icon: <TrendingUpRoundedIcon />, title: 'Pro & scalable', description: 'Des workflows qui grandissent avec vous.' },
            ].map((item, i) => (
              <Grid size={6} item xs={12} md={6} key={i}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: 'rgba(91,124,250,0.15)',
                          border: '1px solid rgba(91,124,250,0.35)',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        {/* Pricing */}
        <Section
          id="pricing"
          sx={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: 3, p: { xs: 3, md: 6 } }}
        >
          <Typography variant="h3" textAlign="center" gutterBottom>
            Tarifs
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Démarrez gratuitement. Passez en Pro quand vous êtes prêt.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={5}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="overline" color="text.secondary">
                    Free
                  </Typography>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h3">0€</Typography>
                    <Typography color="text.secondary">/mois</Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    Parfait pour tester Flowly.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {[
                      'Jusqu’à 2 workflows',
                      '100 exécutions / mois',
                      'Intégrations de base',
                      'Support par email',
                    ].map((f, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleRoundedIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={f} />
                      </ListItem>
                    ))}
                  </List>
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Aucune carte bancaire requise."
                        primaryTypographyProps={{ fontStyle: 'italic', color: 'text.secondary', fontSize: '0.875rem' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button
                    id="get-started"
                    fullWidth variant="outlined"
                    size="large"
                    sx={{ borderRadius: 2 }}
                  >
                    Get started
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  height: '100%',
                }}
              >
                <CardContent>
                  <Typography variant="overline" sx={{ color: 'secondary.main' }}>
                    Premium
                  </Typography>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h3">9€</Typography>
                    <Typography color="text.secondary">/mois</Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    Pensé pour les freelances exigeants.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {[
                      'Jusqu’à 30 workflows',
                      '10k exécutions / mois',
                      'Rôles & permissions',
                      'Support prioritaire',
                    ].map((f, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleRoundedIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary={f} />
                      </ListItem>
                    ))}
                  </List>
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Tarifs dégressifs pour les agences et équipes."
                        primaryTypographyProps={{ fontStyle: 'italic', color: 'text.secondary', fontSize: '0.875rem' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button
                    id="get-premium"
                    fullWidth variant="outlined"
                    size="large"
                    sx={{
                      borderRadius: 2,
                      borderColor: 'secondary.main',
                      color: 'secondary.main',
                      '&:hover': {
                        borderColor: 'secondary.main', backgroundColor: 'rgba(25,223,77,0.04)'
                      }
                    }}
                  >
                    Obternir Flowly Premium
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  height: '100%',
                  borderColor: 'primary.main',
                  boxShadow:
                    '0 0 0 1px rgba(91, 250, 115, 0.4), 0 20px 60px rgba(0, 0, 0, 0.4)',
                }}
              >
                <CardContent>
                  <Typography variant="overline" color="primary.main">
                    Pro
                  </Typography>
                  <Stack direction="row" alignItems="baseline" spacing={1}>
                    <Typography variant="h3">19€</Typography>
                    <Typography color="text.secondary">/mois</Typography>
                  </Stack>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    Pour automatiser tout votre business.
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {[
                      'Workflows illimités',
                      'Exécutions illimitées raisonnables',
                      'Rôles & permissions avancés',
                      'Support prioritaire',
                    ].map((f, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleRoundedIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={f} />
                      </ListItem>
                    ))}
                  </List>
                  <List dense>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary="Tarifs dégressifs pour les agences et équipes."
                        primaryTypographyProps={{ fontStyle: 'italic', color: 'text.secondary', fontSize: '0.875rem' }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" size="large" sx={{ borderRadius: 2 }}>
                    Obternir Flowly Pro
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Section>
        {/* Contact */}
        <Section
          id="contact"
          sx={{
            textAlign: 'center',
            p: { xs: 3, md: 6 },
          }}
        >
          <Typography variant="h4" gutterBottom>
            Prêt à automatiser votre business ?
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Créez votre compte et lancez votre premier workflow en moins de 5 minutes.
          </Typography>
          <Button
            href="#"
            variant="contained"
            size="large"
            startIcon={<PlayArrowRoundedIcon />}
            sx={{ borderRadius: 2 }}
          >
            Créer mon premier workflow
          </Button>
        </Section>


        {/* Testimonials */}
        <Section id="testimonials">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Ils automatisent avec Flowly
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            Des freelances de tous secteurs gagnent des heures chaque semaine.
          </Typography>
          <Grid container spacing={3}>
            <TestimonialCard
              name="Léa"
              role="Designer freelance"
              text="En 20 minutes, j’ai connecté mes outils et lancé mes relances automatiques. Je gagne au moins 3h par semaine."
            />
            <TestimonialCard
              name="Moussa"
              role="Développeur"
              text="Les modèles prêts à l’emploi m’ont permis de gérer ma facturation sans friction."
            />
            <TestimonialCard
              name="Camille"
              role="Coach business"
              text="Mon onboarding client est désormais 100% automatique. Expérience pro, zéro stress."
            />
            <TestimonialCard
              name="Nadia"
              role="Photographe indépendante"
              text="Mes devis, relances et rendez‑vous sont automatisés. Je passe plus de temps à shooter, moins sur l’admin !"
            />
            <TestimonialCard
              numberSize={12}
              name="Hugo"
              role="Consultant SEO"
              text="J’ai branché Notion, Gmail et Calendar : reporting auto et suivi clients nickel. Flowly est devenu indispensable."
            />
          </Grid>
        </Section>
      </Container>


      {/* Footer */}
      <footer
        style={{
          width: '100%',
          marginTop: '64px',
          backgroundColor: 'rgba(18,20,26,0.6)',
          backdropFilter: 'blur(10px)',
          paddingTop: '48px',
          paddingBottom: '32px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Grid container spacing={4} justifyContent="space-between" sx={{ px: { xs: 3, md: 6 } }}>
          {/* Brand + tagline */}
          <Grid item xs={12} md={4}>
            <Stack spacing={1.5}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={{ width: 28, height: 28, borderRadius: 2, bgcolor: 'primary.main', display: 'grid', placeItems: 'center' }}>
                  <BoltRoundedIcon fontSize="small" />
                </Box>
                <Typography fontWeight={800}>Flowly</Typography>
              </Stack>
              <Typography color="text.secondary">
                Automatisez votre business, pas votre passion.
              </Typography>
            </Stack>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="overline" color="text.secondary">Produit</Typography>
            <Stack spacing={1.2} sx={{ mt: 1 }}>
              <MuiLink href="#features" color="text.secondary">Fonctionnalités</MuiLink>
              <MuiLink href="#pricing" color="text.secondary">Tarifs</MuiLink>
              <MuiLink href="#testimonials" color="text.secondary">Témoignages</MuiLink>
            </Stack>
          </Grid>

          {/* Légal */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="overline" color="text.secondary">Légal</Typography>
            <Stack spacing={1.2} sx={{ mt: 1 }}>
              <MuiLink href="#legal" color="text.secondary">Mentions légales</MuiLink>
              <MuiLink href="#privacy" color="text.secondary">Confidentialité</MuiLink>
              <MuiLink href="#contact" color="text.secondary">Contact</MuiLink>
            </Stack>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="overline" color="text.secondary">Restez informé</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Votre email"
                variant="outlined"
                InputProps={{ sx: { borderRadius: 2 } }}
              />
              <Button variant="contained" sx={{ borderRadius: 2 }}>
                S'abonner
              </Button>
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              1 email / mois. Pas de spam.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Twitter" size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" size="small">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Divider sx={{ my: 4 }} />
        <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={2} 
        justifyContent="space-between" 
        alignItems={{ xs: 'flex-start', sm: 'center'}}
        paddingInline={6}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Flowly. Tous droits réservés.
          </Typography>

          <Button
            size='small'
            href="https://www.linkedin.com/in/yacine-samba/"
            color='secondary'
          >
            Yacine Samba de UtopicLabs
          </Button>
        </Stack>
      </footer>

      {/* Invisible login anchor for nav */}
      <Box id="login" sx={{ height: 1 }} />
    </Box>
  );
}
// WorkflowCard (composant)

function WorkflowCard({
  title,
  steps,
}: {
  title: string;
  steps: { icon: React.ReactNode; title: string; subtitle: string }[];
}) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        border: '1px solid rgba(255,255,255,0.08)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
        height: '100%',          // 👈 clé pour occuper la colonne
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="overline" color="text.secondary">{title}</Typography>

      <Stack spacing={2} sx={{ mt: 1, flex: 1 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <FlowNode icon={s.icon} title={s.title} subtitle={s.subtitle} />
            {i < steps.length - 1 && <FlowConnector />}
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
}



// FeatureCard (composant)
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Grid item size={6} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
      <Card sx={{ width: '100%', height: '100%', display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Stack spacing={2}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                bgcolor: 'rgba(0,184,148,0.15)',
                border: '1px solid rgba(0,184,148,0.35)',
              }}
            >
              {icon}
            </Box>
            <Box>
              <Typography variant="h6">{title}</Typography>
              <Typography color="text.secondary">{description}</Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}


function TestimonialCard({
  name,
  role,
  text,
  numberSize = 6,
}: {
  name: string;
  role: string;
  text: string;
  numberSize?: 4 | 6 | 8 | 12;
}) {
  return (
    <Grid item size={numberSize} xs={12} md={4}>
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: 'primary.main' }}>{name.charAt(0)}</Avatar>
              <Box>
                <Typography fontWeight={700}>{name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {role}
                </Typography>
              </Box>
            </Stack>
            <Typography color="text.secondary">“{text}”</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

function FlowConnector() {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
      <Divider sx={{ flex: 1 }} />
      <Chip
        icon={<DragIndicatorRoundedIcon />}
        label="drag"
        size="small"
        variant="outlined"
      />
      <Divider sx={{ flex: 1 }} />
    </Stack>
  );
}

function FlowNode({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid rgba(255,255,255,0.1)',
        bgcolor: 'rgba(0,0,0,0.15)',
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'rgba(255,255,255,0.08)',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
    </Stack>
  );
}
