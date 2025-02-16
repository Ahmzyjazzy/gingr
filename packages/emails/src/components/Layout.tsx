import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
} from "@react-email/components";
import { Font } from "@react-email/font";
import { Tailwind } from "@react-email/tailwind";
import { CompanyEmailSettings } from "../types";
import DownloadAppButtons from "./DownloadAppButtons";
import SocialMediaLinks from "./SocialMediaLinks";
import PrivacyNotice from "./PrivacyNotice";
import AntiFraudReminder from "./AntiFraudReminder";
import { baseUrl } from "../config";
import SupportInfo from "./SupportInfo";
import { appLogo } from "./Links";
import Copyright from "./Copyright";

type Props = {
  children: React.ReactNode;
  preview: string;
  company?: CompanyEmailSettings;
  supportInfo?: boolean;
};

export const Layout = ({ company, supportInfo = true, preview, children }: Props) => {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
            {/* Company Logo */}
            {appLogo ?
              <Section className="text-left">
                <Img src={appLogo} alt="Ginger Logo" className="mb-4" />
              </Section> :
              <Section className="flex text-left">
                <Img src={`${baseUrl}/static/LogoPlaceholder.svg`} alt="Ginger Logo" className="mb-4" />
              </Section>
            }

            <Section>{children}</Section>

            {supportInfo && <SupportInfo />}

            <DownloadAppButtons assetBaseUrl={baseUrl} />

            <SocialMediaLinks assetBaseUrl={baseUrl} />

            <AntiFraudReminder />

            <PrivacyNotice />

            <Copyright />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Layout;
