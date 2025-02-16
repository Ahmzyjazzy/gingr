import { Link, Text } from '@react-email/components'
import { privacyLink } from './Links'

export default function PrivacyNotice() {
  return (
      <Text className="text-gray-500 text-sm text-center mt-4">
          You are receiving this message because you signed up on Ginger. For more information about
          how we process data, please see our{" "}
          <Link href={privacyLink} className="text-indigo-600 font-medium">
            privacy policy
          </Link>
          .
      </Text>
  )
}
