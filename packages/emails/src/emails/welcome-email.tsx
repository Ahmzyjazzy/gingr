import {
  Link,
  Section,
  Text,
} from "@react-email/components";
import { Layout, Salutation } from "../components";
import EmailSignature from "../components/EmailSignature";

type WelcomeEmailProps = {
  name: string;
};

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  return (
    <Layout preview="Weclome to Ginger" supportInfo={false}>
      <Salutation name={name} />

      <Text className="text-gray-500 text-sm text-left mt-4">
        Thank you for signing up to use Ginger.
      </Text>

      <Text className="text-gray-500 text-sm text-justify mt-4">
        Our goal for <b className="text-gray-600">Ginger</b> is to simplify dues and donations collections and ability to receive payments anytime and anywhere via our versatile customizable payment link....🌍🪐
      </Text>

      <Text className="text-gray-500 text-left mt-5">
        Here are 5 things you can do on your app right now to start living a Ginger Life:
      </Text>

      <Section>
        <Text className="text-gray-500 text-left m-0">
          1. Receive payments anytime & anywhere
        </Text>
        <Text className="text-gray-500 text-left p-0 m-0 mb-3">
          Create custom payment links to accept payments for gigs, events, or online stores with ease.
        </Text>
        <Link href={''} className="text-indigo-600 text-sm font-medium">
          Receive Payment
        </Link>
      </Section>

      <Section>
        <Text className="text-gray-500 text-left p-0 m-0 mt-5">
          2. Simplify dues and donations collections
        </Text>
        <Text className="text-gray-500 text-left p-0 m-0 mb-3">
          Keep fundraising for estate residents, organisations, communities, mosques or churches stay organised and transparent
        </Text>
        <Link href={''} className="text-indigo-600 text-sm font-medium">
          Start Collecting
        </Link>
      </Section>

      <Section>
        <Text className="text-gray-500 text-left p-0 m-0 mt-5">
          3. Reach your financial goals with spaces
        </Text>
        <Text className="text-gray-500 text-left p-0 m-0 mb-3">
          Save together with friends, family or coworkers.
        </Text>
        <Link href={''} className="text-indigo-600 text-sm font-medium">
          Start Group Savings
        </Link>
      </Section>

      <Section>
        <Text className="text-gray-500 text-left p-0 m-0 mt-5">
          4. Split one-off bills and group expenses
        </Text>
        <Text className="text-gray-500 text-left p-0 m-0 mb-3">
          Share costs for trips, dinners, group activities
        </Text>
        <Link href={''} className="text-indigo-600 text-sm font-medium">
          Expense Sharing and Split
        </Link>
      </Section>

      <Section>
        <Text className="text-gray-500 text-left p-0 m-0 mt-5">
          5. Redeem gifts and rewards
        </Text>
        <Text className="text-gray-500 text-left p-0 m-0 mb-3">
          Claim vouchers, gifts and rewards easily
        </Text>
        <Link href={''} className="text-indigo-600 text-sm font-medium">
          Invite friends to Ginger
        </Link>
      </Section>

      <Text className="text-gray-500 text-left my-5">
        When you’re done, explore Ginger to see all the other things you can do.
      </Text>

      <EmailSignature />
    </Layout>
  );
}

WelcomeEmail.PreviewProps = {
  name: "Lade"
} as WelcomeEmailProps

export default WelcomeEmail;
