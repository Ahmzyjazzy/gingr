import {
  Section,
  Text,
} from "@react-email/components";
import { Layout, Salutation } from "../components";

type OtpEmailProps = {
  name: string;
  token: string;
  host?: string;
};

export const OtpEmail = ({ name, token, host }: OtpEmailProps) => {
  return (
    <Layout preview="Your One-Time Password (OTP) for Ginger">
      <Salutation name={name} />

      <Text className="text-gray-600">
        Please use the One-Time Password (OTP) to activate your account and keep it secure.
      </Text>

      {/* OTP Box */}
      <Section className="bg-purple-50 text-center text-3xl font-bold text-indigo-600 py-3 rounded-lg mx-auto max-w-xs my-4">
        {token}
      </Section>

      <Text className="text-gray-600 text-left">
        Enter this code to complete your account activation to access all that Ginger has to offer.
      </Text>
    </Layout>
  );
}

OtpEmail.PreviewProps = {
  name: "Lade",
  token: "5 0 7 2 2 1",
  host: "ginger.co"
} as OtpEmailProps;

export default OtpEmail;
