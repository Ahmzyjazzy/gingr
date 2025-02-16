import { SMTPSettings } from "@gingr/database";

export type CompanyEmailSettings = {
  name: string;
  tagline?: string;
  logoUrl?: string;
  website: string;
  color?: {
    primary?: string;
    background?: string;
  };
};

export type CompanyObject = {
  smtpSettings: SMTPSettings;
} & CompanyEmailSettings;