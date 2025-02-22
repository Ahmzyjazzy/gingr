import { Input as HeroUIInput, type InputProps, } from "@heroui/react";

export interface CustomInputProps extends InputProps {
    className?: string;
}

export function Input({ className = "", ...props }: CustomInputProps) {
    return <HeroUIInput
        className={className}
        {...props}
    //          *    base:"base-classes",
    //  *    label: "label-classes",
    //  *    mainWrapper: "main-wrapper-classes",
    //  *    inputWrapper: "input-wrapper-classes",
    //  *    innerWrapper: "inner-wrapper-classes",
    //  *    input: "input-classes",
    //  *    clearButton: "clear-button-classes",
    //  *    helperWrapper: "helper-wrapper-classes",
    //  *    description: "description-classes",
    //  *    errorMessage: "error-message-classes",
        classNames={{
            inputWrapper: "rounded bg-zinc-100 border transition-colors focus-within:bg-zinc-100 data-[hover=true]:border-zinc-600 data-[hover=true]:bg-zinc-100 group-data-[focus=true]:border-zinc-600 dark:bg-zinc-900 dark:border-zinc-800 dark:data-[hover=true]:bg-zinc-900 dark:focus-within:bg-zinc-900",
            input: "text-zinc-800 placeholder:text-zinc-600 dark:text-zinc-400 dark:placeholder:text-zinc-600",
        }}
    />;
}