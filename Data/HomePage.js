
import { 
  popDarkMode,
  popDontDisturb,
  popGaming,
  popHybrid,
  popRaspberry
} from "./Images";
import { linkItems, FaBookOpen, FaGithub, SiMattermost } from "./Icons";

export const omnibar = {
  text: 'Personalize your workflow with the Launch configurable keyboard!',
  href: 'https://system76.com/accessories/launch',
  buttonOne: {
    label: 'Specials',
    href: '#',
  },
  buttonTwo: {
    label: 'Download',
    href: '#',
  }
}

export const intro = {
  title: 'Welcome to Pop!_OS',
  text: 'Pop!_OS is an operating system for STEM and creative professionals who use their computer as a tool to discover and create. Unleash your potential on secure, reliable open source software. Based on your exceptional curiosity, we sense you have a lot of it.',
}

export const workflow = {
  title: 'Streamline your workflow',
  text: 'Pop!_OS is designed for fast navigation, easy workspace organization, and fluid, convenient workflow. Your operating system should encourage discovery, not obstruct it.',
  bigCards: [
    {
      title: 'Workflow customization',
      text: "While you've got your wheels turning, take the scenic route with a dock and touchpad gestures, or race along a minimalist track from behind the wheel of a revving keyboard. With a variety of both mouse-driven and keyboard-driven customizations, you're empowered to navigate your workflow the way you've always wanted.",
      videoLink: 'https://www.youtube-nocookie.com/embed/SrWw2LeZ21U',

    },
    {
      title: 'Auto-tiling with pop shell',
      text: "Pop!_OS uses auto-tiling for the same reason that people hire assistants: Organizing your work is incredibly time-consuming. Sure, you could still move, resize, and arrange windows yourself, but why spend the time when your OS does it for you? Auto-tiling helps you be both organized and efficient, and is especially convenient on large displays. ",
      videoLink: 'https://www.youtube-nocookie.com/embed/-fltwBKsMY0',
    },
  ],
  cards: [
    {
      title: 'Workspaces',
      text: 'Keep relevant content together and irrelevant content out of sight. When the clutter overwhelms you, just toss it onto another desktop. Problem solved.',
      videoLink: 'https://www.youtube.com/embed/USQjxLP1Z5k',
      list: false,
    },
    {
      title: 'Keyboard navigation',
      text: 'Arm yourself with a dark-lord level of power at your fingertips. Use keyboard shortcuts to:',
      videoLink: 'https://www.youtube.com/embed/aqj0cRTZaVE',
      list: [
        "move/resize windows",
        "search for anything",
        "launch applications",
      ],
    },
    {
      title: 'Stacking',
      text: 'Stack application windows atop one another like tabs in a web browser. Just remember to switch off of Steam when the boss walks in.',
      videoLink: 'https://www.youtube.com/embed/1TSdFWY_U9A?controls=0',
      list: false,
    }
  ]
}

export const toolkit = {
  title: 'Development toolkit work flawlessly',
  text: 'Develop software out of the box with a vast array of libraries and tools at your disposal. Pop!_OS uses APT and Flatpak package management, meaning it’s easy to install, remove, and update all software on the OS.',
  cards: [
    {
      title: 'Deep learning',
      text: "Code life into the machinery of the future. Perfect your model for predicting a hurricane's path, and use Tensorman to keep organized along the way.",
      list: [
        "Tensorman",
        "Tensorflow",
        "PyTorch",
        "Caffe",
        "Jupyter",
        "MATLAB",
      ],
    },
    {
      title: 'Engineering',
      text: 'Secure data inside an impenetrable fortress. Break ground, then leave it, on a journey for interstellar travel. Your possibilities — and potential — are infinite.',
      list: [
        "VS Code",
        "ROS",
        "Postman",
        "KiCad",
        "Android Studio",
        "Arduino IDE",
      ],
    },
    {
      title: 'Media Production',
      text: "Design a character. Animate it. Give it a voice, then tell its story. Stream your technique to hundreds of young artists. No subscription required.",
      list: [
        "Blender",
        "DaVinci Resolve",
        "OBS Studio",
        "Inkscape",
        "Lightworks",
        "Natron",
      ],
    },
    {
      title: 'Bioinformatics',
      text: "Discover new treatments for bacterial diseases. Explore the vast ecosystem of the gut. Use a bevy of programs to learn more about the human genome than ever before.",
      list: [
        "R",
        "Bioconductor",
        "Bioconda",
        "UniProt",
        "Bowtie 2",
        "Biopython",
      ]
    }
  ]
}

export const hardwareSale = {
  title: 'Get every advantage on system76 hardware',
  subtitle: 'Form of: An amazing computer.',
  texts: [
    "System76 hardware is engineered together with Pop!_OS for optimal performance and user experience. Our computers empower creators, makers, and builders to go forth and discover.",
    "Launch keyboard and Pop!_OS propel your ideas forward at max velocity. Customize your layout, pluck and place keycaps, turn down Caps Lock, and take your changes with you wherever you go.",
  ],
}

export const securitySection = {
  image: '../assets/secimg.png',
  cards: [
    {
      title: 'Encryption out of the box',
      text: 'Pop!_OS encrypts your installation by default, and is the only Linux distribution that enables pre-installed full-disk encryption out of the box. A unique private encryption key is generated during setup after you receive your computer.',
    },
    {
      title: 'Update on Your Terms',
      text: 'Pop!_OS provides the latest features and security patches through rolling updates and periodic OS version upgrades, to be performed at your discretion. And if you want a clean slate, the Refresh Install feature resets your OS while preserving the files in your Home folder.',
    },
    {
      title: 'Privacy',
      text: 'Pop!_OS does not collect or store any info from user installations. Minimal OS and hardware data is used—not stored—to provide updates and connectivity verification. Apps packaged through Flatpak require permission to access more than what’s needed to function.',
    },
    {
      title: 'Firmware management',
      text: 'Automatic firmware updates can be accessed from your software settings on System76 hardware. These updates help to promptly quash any threat of security risk to your computer.',
    },
  ]
}

export const softwareTools = {
  title: 'Compatible with most software tools',
  text: "That app you desperately need in order to function? We probably have it. The vast software libraries of Ubuntu and Flatpak combine to make all of your tools available in a single location, called the Pop!_Shop. The Pop!_Shop is our version of Android’s Play Store or the App Store on iOS, and we’re constantly adding new applications to the mix—a productivity cocktail that goes down smooth.",
  linkItems,
}

export const features = {
  title: 'Other features',
  text: false,
  cards: [
    {
      title: 'Hybrid graphics',
      text: 'Set phasers to stunning performance. Toggle between battery-saving and high-powered graphics, or tell an application to use your GPU on launch.',
      image: popHybrid,
    },
    {
      title: 'Gaming',
      text: 'Steam, Lutris, and GameHub create an incredible gaming experience in selection and performance. Let your game library roam free on a single-OS PC.',
      image: popGaming,
    },
    {
      title: 'Do not disturb',
      text: 'Get rid of any and all notifications for however long you like. Cast out ye heathens, for there is many a work to be done!',
      image: popDontDisturb,
    }
  ],
  bigCards: [
    {
      title: 'Dark mode',
      text: 'It’s dark, like your afternoon coffee—but with high-contrast accent colors to please the eye. Flip the toggle below to see Dark Mode in action.',
      image: popDarkMode,
      themeToggler: true,
    },
    {
      title: 'Dark mode',
      text: 'It’s dark, like your afternoon coffee—but with high-contrast accent colors to please the eye. Flip the toggle below to see Dark Mode in action.',
      image: popDarkMode,
    },
  ]
}

export const raspberryOS = {
  title: 'Pop!_PI for raspberry pi 4',
  subtitle: 'Tech preview',
  text: "We’ve optimized Pop!_OS 21.10 for the Raspberry Pi 4/400, a mini computer which empowers people to learn and explore computing. Pop!_Pi adapts Pop!_OS to the Raspberry Pi, giving you the same powerful software tools at your disposal. So whether you’re programming a robot or learning Rust, have fun tinkering and experimenting!",
  image: popRaspberry,
  btn: true,
}

export const end = {
  text: "Pop!_OS is free to download. If you want to try it out before you commit, you can download the .iso file to a USB and boot the OS from there. Here’s how. Like what we’re doing? Subscribe to fund more awesome features down the road. We’ve always got something exciting in the works for you to experience.",
  buttons: [
    {
      href: '#',
      label: 'Download',
      bgColor: '#6acad8',
    },
    {
      href: '#',
      label: 'Support pop',
      bgColor: '#ffa300',
    }
  ],
  links: [
    {
      href: '#',
      icon: FaBookOpen,
      label: 'Pop!_os',
    },
    {
      href: '#',
      icon: SiMattermost,
      label: 'Pop!_Chat',
    },
    {
      href: 'https://github.com',
      icon: FaGithub,
      label: 'GitHub',
    }
  ]
}