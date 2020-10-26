import { User } from 'regen-components/lib/components/user/UserInfo';
import { Place } from 'regen-components/lib/components/place/ProjectPlaceInfo';
import { ItemProps as ProtectedSpeciesItem } from 'regen-components/lib/components/sliders/Item';
import { Media } from 'regen-components/lib/components/sliders/ProjectMedia';
import { Event } from 'regen-components/lib/components/timeline';
import { ActionProps } from 'regen-components/lib/components/action';
import { CreditPrice } from 'regen-components/lib/components/fixed-footer/BuyFooter';
import { Data } from 'regen-components/lib/components/table';
import { CreditClass } from 'regen-components/lib/components/credits/CreditDetails';
import mock from './mock.json';

// imgSrc should be either web url or static image filenames within web/src/assets/
// (eg to load web/src/assets/coorong.jpg, use "coorong.jpg" as imgSrc)

export interface ActionGroup {
  title?: string;
  actions: ActionProps[];
}

export interface Impact {
  name: string;
  description: string;
  imgSrc: string;
  monitored: boolean;
}

interface Timeline {
  events: Event[];
  completedItemIndex: number;
}

export interface Project {
  id: string; // human-readable id for now
  name: string;
  place: Place;
  type: string;
  area: number;
  areaUnit: string;
  startDate: Date | string;
  endDate: Date | string;
  developer: User;
  steward: User;
  owner?: User;
  shortDescription: string;
  glanceText?: string[];
  glanceImgSrc?: string;
  longDescription: string;
  media: Media[];
  image: string;
  map: string;
  keyOutcomesActivities: string[];
  landManagementActions: ActionGroup[];
  impact: Impact[];
  creditClass: CreditClass;
  protectedSpecies?: ProtectedSpeciesItem[];
  timeline?: Timeline;
  fieldsOverride?: ProjectOverride;
  credits?: {
    purchased: number;
    issued: number; // total number of issued credits
  };
  creditPrice?: CreditPrice;
  presaleUrl?: string;
  hideCreditDetails?: boolean;
  documents: Data[];
  stripePrice?: string;
}

interface BasicProject {
  id: string;
  name: string;
}

interface Purchase {
  total: number;
  date: Date | string;
}

export interface PurchasedCredits {
  userId: string;
  project: BasicProject;
  currentPurchase: Purchase;
  totalPurchased: number;
  totalAvailable: number;
}

interface ProjectDefaultFields {
  title: string;
  subtitle?: string;
}

export interface ProjectDefault {
  story: ProjectDefaultFields;
  monitoredImpact: ProjectDefaultFields;
  nonMonitoredImpact: ProjectDefaultFields;
  protectedSpecies: ProjectDefaultFields;
  landManagementActions: ProjectDefaultFields;
  keyOutcomesActivities: ProjectDefaultFields;
  timeline: ProjectDefaultFields;
}

export interface ProjectOverride {
  story?: ProjectDefaultFields;
  monitoredImpact?: ProjectDefaultFields;
  nonMonitoredImpact?: ProjectDefaultFields;
  protectedSpecies?: ProjectDefaultFields;
  landManagementActions?: ProjectDefaultFields;
  keyOutcomesActivities?: ProjectDefaultFields;
  timeline?: ProjectDefaultFields;
}

export interface Mock {
  creditsIssuer: User;
  projects: Project[];
  projectDefault: ProjectDefault;
  purchasedCredits: PurchasedCredits[];
}

export const creditsIssuer: User = mock.creditsIssuer;
export const purchasedCredits: PurchasedCredits[] = mock.purchasedCredits;
export const projects: Project[] = mock.projects;
export const projectDefault: ProjectDefault = mock.projectDefault;
