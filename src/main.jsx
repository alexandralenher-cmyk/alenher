import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight,
  Bike,
  CalendarDays,
  Gem,
  Instagram,
  Mail,
  Mountain,
  Palette,
  PawPrint,
  PersonStanding,
  Sparkles,
  Watch,
} from 'lucide-react'
import './styles.css'

const siteName = 'Alexandra Lenher — Links & Adventures'
const siteDescription = "Follow Alexandra Lenher for cats, bikes, nature, creative work, jewelry, and trail adventures."

const links = [
  {
    title: 'Follow me on Strava',
    subtitle: 'Cycling, trail miles & mountain days',
    href: 'https://www.strava.com/athletes/search?q=Alexandra%20Lenher',
    icon: Bike,
    featured: true,
    stamp: 'LET’S MOVE',
  },
  {
    title: 'Wild Clarity',
    subtitle: 'Branding, web design & content strategy',
    href: 'https://wildclarity.co',
    icon: Palette,
    logo: '/brands/wild-clarity.png',
  },
  {
    title: 'Work With Me',
    subtitle: 'Book a discovery call',
    href: 'https://wild-clarity.myflodesk.com/jwjks18jp8',
    icon: CalendarDays,
    logo: '/brands/wild-clarity.png',
  },
  {
    title: 'Shop Alchemical Jewelry',
    subtitle: 'Hand-forged silver & stone — Stay Wild',
    href: 'https://alchemicaljewelry.com',
    icon: Gem,
    logo: '/brands/alchemical-jewelry.png',
  },
  {
    title: 'Custom Commissions',
    subtitle: 'Request a one-of-a-kind piece',
    href: 'https://alchemicaljewelry.com/pages/custom-jewelry',
    icon: Sparkles,
    logo: '/brands/alchemical-jewelry.png',
  },
  {
    title: 'The Alchemy Society',
    subtitle: 'Slow magic, new work & stone lore',
    href: 'https://alchemicaljewelry.com/pages/unveil-the-magic-join-the-alchemy-society-newsletter',
    icon: Mail,
    logo: '/brands/alchemical-jewelry.png',
  },
  {
    title: 'Oura Ring',
    subtitle: 'My referral link — get $40 off',
    href: 'https://ouraring.com/discount/1981cca397?utm_source=user&utm_medium=iac_raf&utm_type=alwayson-cvr&utm_campaign=2026RAF&utm_variant=2026_raf_jan',
    icon: Watch,
  },
]

const socials = [
  { label: 'Personal Instagram', handle: '@alexandralenher', href: 'https://instagram.com/alexandralenher' },
  { label: 'Wild Clarity Instagram', handle: '@wildclarity_', href: 'https://www.instagram.com/wildclarity_/' },
  { label: 'Alchemical Jewelry Instagram', handle: '@alchemical_jewelry', href: 'https://www.instagram.com/alchemical_jewelry/' },
]

function TrailMap() {
  return (
    <svg className="trail-map" viewBox="0 0 720 1080" aria-hidden="true">
      <path className="trail-path" d="M80 38 C330 130 151 300 424 338 S725 540 460 636 S106 770 318 1042" />
      <path className="trail-dash" d="M80 38 C330 130 151 300 424 338 S725 540 460 636 S106 770 318 1042" />
      <circle cx="80" cy="38" r="7" />
      <circle cx="318" cy="1042" r="7" />
    </svg>
  )
}

function MountainRidge() {
  return (
    <svg className="mountain-ridge" viewBox="0 0 900 250" preserveAspectRatio="none" aria-hidden="true">
      <path className="ridge-back" d="M0 218L126 98l62 61L301 28l112 134 54-55 85 80 74-109 105 125 73-68 96 83v32H0z" />
      <path className="ridge-front" d="M0 233l154-94 82 70 116-105 97 116 104-82 89 67 104-118 154 146v17H0z" />
    </svg>
  )
}

function TireTrack() {
  return (
    <div className="tire-track" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => <i key={index} />)}
    </div>
  )
}

function MountainBikeMark() {
  return (
    <svg className="mountain-bike-mark" viewBox="0 0 150 88" aria-hidden="true">
      <g className="bike-tires">
        <circle cx="33" cy="59" r="23" />
        <circle cx="117" cy="59" r="23" />
      </g>
      <g className="bike-frame">
        <path d="M33 59 58 27l28 32H33l38-4 20-34 26 38" />
        <path d="m55 27 29 1M88 18h13M111 20l11-3M117 59l-7-37" />
        <circle cx="86" cy="59" r="4" />
      </g>
    </svg>
  )
}

function TrailDetails() {
  return (
    <div className="trail-details" aria-hidden="true">
      <div className="paw-trail">
        <PawPrint size={23} strokeWidth={1.45} />
        <PawPrint size={18} strokeWidth={1.55} />
        <PawPrint size={14} strokeWidth={1.65} />
      </div>
      <MountainBikeMark />
    </div>
  )
}

function App() {
  React.useEffect(() => {
    document.title = siteName
    document.querySelector('meta[name="description"]')?.setAttribute('content', siteDescription)
  }, [])

  return (
    <main>
      <div className="grain" />
      <TrailMap />
      <MountainRidge />
      <TireTrack />
      <TrailDetails />

      <section className="profile" aria-labelledby="page-title">
        <div className="eyebrow"><Mountain size={16} /> trails • metal • magic</div>
        <div className="monogram" aria-hidden="true">
          <span>AL</span>
          <Bike className="bike-mark" size={27} strokeWidth={1.6} />
        </div>
        <h1 id="page-title">Alexandra<br /><em>Lenher</em></h1>
        <p className="handle">@alexandralenher</p>
        <p className="bio">I like cats, bikes, and nature.</p>
        <div className="activity-row" aria-label="Cycling, running, and hiking">
          <span><Bike size={17} /> ride</span>
          <span><PersonStanding size={17} /> run</span>
          <span><Mountain size={17} /> hike</span>
        </div>
      </section>

      <section className="links" aria-label="Alexandra's links">
        {links.map(({ title, subtitle, href, icon: Icon, logo, featured, stamp }, index) => (
          <a
            className={`link-card ${featured ? 'featured' : ''}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            key={title}
            style={{ '--delay': `${index * 70 + 180}ms` }}
          >
            <span className={`icon-wrap ${logo ? 'brand-logo' : ''}`}>
              {logo ? <img src={logo} alt="" aria-hidden="true" /> : <Icon size={21} strokeWidth={1.7} />}
            </span>
            <span className="link-copy">
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </span>
            {stamp && <span className="stamp">{stamp}</span>}
            <ArrowUpRight className="arrow" size={19} />
          </a>
        ))}
      </section>

      <section className="socials" aria-label="Instagram profiles">
        <div className="social-heading"><span /> find me in the wild <span /></div>
        {socials.map(({ label, handle, href }) => (
          <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={handle}>
            <Instagram size={17} /> {handle}
          </a>
        ))}
      </section>

      <footer>made for the long way around <span>•</span> stay wild</footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
