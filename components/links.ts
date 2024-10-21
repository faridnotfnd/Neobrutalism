import behance from '../public/icons/behance.svg'
import buymeacoffee from '../public/icons/buymeacoffee.svg'
import dribbble from '../public/icons/dribbble.svg'
import figma from '../public/icons/figma.svg'
import github from '../public/icons/github.svg'
import gumroad from '../public/icons/gumroad.svg'
import instagram from '../public/icons/instagram.svg'
import kofi from '../public/icons/kofi.svg'
import linkedin from '../public/icons/linkedin.svg'
import medium from '../public/icons/medium.svg'
import patreon from '../public/icons/patreon.svg'
import producthunt from '../public/icons/producthunt.svg'
import readcv from '../public/icons/read-cv.svg'
import reddit from '../public/icons/reddit.svg'
import tiktok from '../public/icons/tiktok.svg'
import twitch from '../public/icons/twitch.svg'
import x from '../public/icons/x.svg'
import youtube from '../public/icons/youtube.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'buymeacoffee',
  'figma',
  'github',
  'instagram',
  'kofi',
  'readcv',
  'tiktok',
  'twitch',
  'x',
  'youtube',
]

const LINKS: { [key in SocialMedia]: Link } = {
  buymeacoffee: {
    title: 'Buy me a coffee',
    icon: buymeacoffee,
    link: 'https://common-coming-soon-page.netlify.app/',
  },  
  figma: {
    title: 'Figma',
    icon: figma,
    link: 'https://www.figma.com/Fariddntfonts',
    text: '@Fariddntfonts',
  },
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/faridnotfnd',
    text: '@faridnotfnd',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/f4.rdd/',
    text: '@f4.rdd',
  },
  kofi: {
    title: 'Ko-fi',
    icon: kofi,
    link: 'https://common-coming-soon-page.netlify.app/',
    text: '@Cs',
  },
  readcv: {
    title: 'Read CV',
    icon: readcv,
    link: 'https://common-coming-soon-page.netlify.app/',
    text: 'Farid Sidik',
  },
  tiktok: {
    title: 'Tiktok',
    icon: tiktok,
    link: 'https://common-coming-soon-page.netlify.app/',
    text: '@Cs',
  },
  x: {
    title: 'X',
    icon: x,
    link: 'https://common-coming-soon-page.netlify.app/',
    text: '@Cs',
  },
  youtube: {
    title: 'Youtube',
    icon: youtube,
    link: 'https://www.youtube.com/@faavlnc',
    text: '@faavlnc',
  },
}

export default LINKS
