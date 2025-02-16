import { Button as REButton } from "@react-email/components";

export const Button = ({
  link,
  label,
  colour,
}: {
  link: string | undefined;
  label: string;
  colour?: string;
}) => (
  <REButton
    style={{
      width: "fit-content",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
      margin: "10px 0",
      padding: "12px 36px",
      backgroundColor: colour ? colour : "#c96cbf",
    }}
    href={link}
  >
    {label}
  </REButton>
);

export default Button;
