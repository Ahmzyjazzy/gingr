import { Button as HeroUIButton, type ButtonProps } from "@heroui/button";

export interface CustomButtonProps extends ButtonProps {
  className?: string;
}

export function Button({ className = "", ...props }: CustomButtonProps) {
  return <HeroUIButton className={className} {...props} />;
}