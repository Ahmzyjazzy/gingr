import {
  Link,
  Section,
  Text,
} from "@react-email/components";
import { Layout, Salutation } from "../components";

type ShareReferralEmailProps = {
  name: string;
  refferalLink: string;
  refferalCode: string;
};

export const ShareReferralEmail = ({ name, refferalLink, refferalCode }: ShareReferralEmailProps) => {
  return (
    <Layout preview={`Join ${name} on Ginger`} supportInfo={false}>
      <Salutation title={`Join ${name} on Ginger`} />

      <Text className="text-gray-600">
        I use the Ginger app to receive payments, pay for dues, redeem gift and giveaways.
      </Text>

      <Text className="text-gray-600">
        Use my link below or my phone number <b>{refferalCode}</b> to join and get <b>NGN1,000</b> welcome bonus.
      </Text>

      <Section className="bg-purple-50 text-center text-sm font-semibold text-indigo-600 py-3 rounded-lg mx-auto max-w-xs my-4">
        <Link href={''} target="_blank" className="text-indigo-600">
          {refferalLink}
        </Link>
      </Section>

      <Text className="text-gray-600 text-left">
        This link will take you to our platform where you can easily claim your reward.
      </Text>

      <Text className="text-gray-600 text-left">
        Please note: This reward is valid until till November 28, 2025.  Be sure to redeem it before then! 🎉🎉
      </Text>
    </Layout>
  );
}

ShareReferralEmail.PreviewProps = {
  name: "Lade",
  refferalLink: "https://link.ginger.co/arzRQ",
  refferalCode: "09023459697"
} as ShareReferralEmailProps;


export default ShareReferralEmail;
