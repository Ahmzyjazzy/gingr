import { Text } from "@react-email/components";

export const Salutation = ({ name, title }: { name?: string, title?: string }) => (
  <Text className="text-lg font-medium">{title ? title : `Hello ${name},`}</Text>
);

export default Salutation;
