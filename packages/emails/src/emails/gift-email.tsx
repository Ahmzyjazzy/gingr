import {
  Link,
  Section,
  Text,
} from "@react-email/components";
import { Layout, Salutation } from "../components";

type GiftEmailProps = {
  name: string;
  rewardLink: string;
  host?: string;
};

export const GiftEmail = ({ name, rewardLink, host }: GiftEmailProps) => {
  return (
    <Layout preview="You Got a Gift to Redeem on Ginger">
      {/* Greeting */}
      <Salutation name={name} />

      <Text className="text-gray-600">
        Ahmed has sent you a special reward 🎁 through Ginger!  We're excited for you to claim it. To redeem your gift, simply click on the link below:
      </Text>

      {/* OTP Box */}
      <Section className="bg-purple-50 text-center text-sm font-semibold text-indigo-600 py-3 rounded-lg mx-auto max-w-xs my-4">
        <Link href={''} target="_blank" className="text-indigo-600">
          {rewardLink}
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

GiftEmail.PreviewProps = {
  name: "Lade",
  rewardLink: "https://rewards.ginger.co/h9cf",
  host: "ginger.co"
} as GiftEmailProps;

export default GiftEmail;
