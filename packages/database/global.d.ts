export type SMTPSettings = {
  host: string;
  port: number;
  username: string;
  password: string;
  fromEmail: string;
  fromName?: string;
  secure?: boolean;
};

export type Currency = {
  symbol: string;
  name: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
};

declare global {
  namespace PrismaJson {
    type SMTPSetting = SMTPSettings;
  }
}
