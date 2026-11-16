import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon, ArrowUpRight01Icon, ArrowLeft01Icon, ArrowUp01Icon, GithubIcon, Linkedin01Icon, Mail01Icon,
  Award01Icon, ChampionIcon, CodeIcon, Shield01Icon, CloudIcon, SparklesIcon, PlayIcon, PauseIcon, Tick02Icon,
  Location01Icon, Clock01Icon, UserGroupIcon, UserIcon, Sun03Icon, Moon02Icon, ComputerIcon, Download04Icon,
  Copy01Icon, Menu01Icon, Cancel01Icon, Mortarboard01Icon, Briefcase01Icon, Certificate01Icon, Rocket01Icon, Calendar03Icon,
} from "@hugeicons/core-free-icons";

const map = {
  arrow: ArrowRight01Icon, external: ArrowUpRight01Icon, back: ArrowLeft01Icon, up: ArrowUp01Icon,
  github: GithubIcon, linkedin: Linkedin01Icon, mail: Mail01Icon, award: Award01Icon, trophy: ChampionIcon,
  code: CodeIcon, shield: Shield01Icon, cloud: CloudIcon, spark: SparklesIcon, play: PlayIcon, pause: PauseIcon,
  check: Tick02Icon, pin: Location01Icon, clock: Clock01Icon, users: UserGroupIcon, user: UserIcon,
  sun: Sun03Icon, moon: Moon02Icon, auto: ComputerIcon, download: Download04Icon, copy: Copy01Icon,
  menu: Menu01Icon, close: Cancel01Icon, cap: Mortarboard01Icon, briefcase: Briefcase01Icon,
  certificate: Certificate01Icon, rocket: Rocket01Icon, calendar: Calendar03Icon,
};

const Icon = ({ name, size = 20, className = "", strokeWidth = 1.8 }) => (
  <HugeiconsIcon icon={map[name]} size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
);

export default Icon;
