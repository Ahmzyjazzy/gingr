import { Link, Text } from '@react-email/components';

export default function SupportInfo() {
  return (
      <Text className="text-gray-600 text-left">
          If you need any help, or have further questions, please contact{" "}
          <Link href="mailto:support@ginger.com" className="text-indigo-600">
              support@ginger.com
          </Link>
          . Thanks for choosing Ginger.
      </Text>
  )
}
