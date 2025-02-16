import { Text } from '@react-email/components';

export default function Copyright() {
  return (
      <Text className="text-gray-500 text-xs text-center mt-4">
          Copyright &copy; {new Date().getFullYear()}
      </Text>
  )
}
