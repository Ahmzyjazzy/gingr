"use client";

import { Button, Input } from "@gingr/ui";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
} from "@/app/(auth)/_components/icons";

const formSchema = z.object({
  name: z
    .string()
    .nonempty("Name cannot be empty.")
    .min(2, "Name must be at least 2 characters long.")
    .regex(
      /^[a-zA-Z]+( [a-zA-Z]+)*$/,
      "Name can only contain letters and single spaces between words.",
    ),
  email: z
    .string()
    .nonempty("Email cannot be empty.")
    .email("Please enter a valid email address."),
  password: z
    .string()
    .nonempty("Password cannot be empty.")
    .min(6, "Password must be at least 6 characters long."),
});

type FormInput = z.infer<typeof formSchema>;

interface Props {
  isCreateLoading: boolean;
  handleSubmitCallback: (email: string, password: string) => void;
}

export default function CreateUserWithCredentialForm({
  isCreateLoading,
  handleSubmitCallback,
}: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  return (
    <form
      className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4"
      onSubmit={handleSubmit(() => {
        handleSubmitCallback(watch("email"), watch("password"));
      })}
    >
      <Input
        {...register("name")}
        errorMessage={errors.name?.message}
        isDisabled={isCreateLoading}
        isInvalid={!!errors.name}
        label="Name"
        size="md"
        type="text"
        variant="bordered"
      />
      <Input
        {...register("email")}
        errorMessage={errors.email?.message}
        isDisabled={isCreateLoading}
        isInvalid={!!errors.email}
        label="Email"
        size="md"
        type="email"
        variant="bordered"
      />
      <Input
        {...register("password")}
        endContent={
          <button
            aria-label="toggle password visibility"
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        errorMessage={errors.password?.message}
        isDisabled={isCreateLoading}
        isInvalid={!!errors.password}
        label="Password"
        size="md"
        type={isVisible ? "text" : "password"}
        variant="bordered"
      />
      <Button color="primary">Login</Button>
    </form>
  );
}
