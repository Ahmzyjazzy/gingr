import { Link, Section, Text } from '@react-email/components';

export default function AntiFraudReminder() {
  return (
      <Section className="bg-[#FEF3EB] p-4 rounded-lg mt-6">
          <Text className="font-semibold flex items-center">
              ⚠️ Anti-Fraud Reminder
          </Text>
          <Text className="text-gray-600 text-sm">
              Ginger will never ask for your passwords, transaction PIN, or other sensitive details.
              If you suspect any unusual activity or need assistance, don’t hesitate to get in touch
              with us at{" "}
              <Link href="mailto:support@ginger.com" className="text-indigo-600 font-medium">
                  support@ginger.com
              </Link>
              .
          </Text>
      </Section>
  )
}
