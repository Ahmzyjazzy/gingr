import { Section, Text } from '@react-email/components';

export default function EmailSignature() {
  return (
    <Section>
      <Text className="text-gray-600 text-sm text-left mt-4 m-0 p-0">
        Your friend,
      </Text>
      <Text className="text-gray-600 text-sm text-left m-0 p-0">
        Lanre at Ginger
      </Text>
    </Section>
  )
}
