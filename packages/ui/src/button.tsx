import { Button as HeroUIButton, type ButtonProps } from "@heroui/button";
import { cn } from "./utils";

export interface CustomButtonProps extends ButtonProps {
  className?: string;
}

export function Button({ className = "", ...props }: CustomButtonProps) {
  return <HeroUIButton className={cn('rounded', className)} {...props} />;
}