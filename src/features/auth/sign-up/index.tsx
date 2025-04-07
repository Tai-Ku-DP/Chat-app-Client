import Image from "next/image";
import { FormItem } from "~/components";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { cn } from "~/lib/utils";
import { CardWrapper } from "../components";
import { IFormSignup, schema } from "./schema";
import { useActionsSignup } from "./hook/useActionsSignup";
import Link from "next/link";

export const SignUp = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormSignup>({
    resolver: yupResolver(schema),
  });

  const { submitSignup, loadingSignup } = useActionsSignup();

  return (
    <CardWrapper>
      <div className={cn("flex flex-col gap-6")}>
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm overflow-hidden">
          <div className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome to Chat App</h1>
                  <p className="text-balance text-muted-foreground">
                    Sign up for an account now
                  </p>
                </div>

                <FormItem
                  htmlFor="email"
                  label="Email"
                  isRequired
                  err={errors?.email?.message}
                >
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { value, onChange } }) => (
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </FormItem>

                <FormItem
                  err={errors?.fullName?.message}
                  htmlFor="fullName"
                  label="Full Name"
                  isRequired
                >
                  <Controller
                    control={control}
                    name="fullName"
                    render={({ field: { value, onChange } }) => (
                      <Input
                        id="fullName"
                        placeholder="123456"
                        required
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </FormItem>

                <FormItem
                  err={errors?.password?.message}
                  htmlFor="password"
                  label="Password"
                  isRequired
                >
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { value, onChange } }) => (
                      <Input
                        id="password"
                        type="password"
                        placeholder="123456"
                        required
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </FormItem>

                <FormItem
                  err={errors?.passwordConfirm?.message}
                  htmlFor="passwordConfirm"
                  label="Confirm Password"
                  isRequired
                >
                  <Controller
                    control={control}
                    name="passwordConfirm"
                    render={({ field: { value, onChange } }) => (
                      <Input
                        id="passwordConfirm"
                        type="password"
                        placeholder="confirm"
                        required
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </FormItem>

                <Button
                  type="submit"
                  className="w-full"
                  onClick={handleSubmit(submitSignup)}
                  isLoading={loadingSignup}
                >
                  Signup
                </Button>

                <div className="text-center text-sm">
                  You already have an account?{" "}
                  <Link href="/login" className="underline underline-offset-4">
                    Login
                  </Link>
                </div>
              </div>
            </form>

            <div className="relative hidden md:block ">
              <Image
                src="/images/image.jpeg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded-md"
                style={{ width: "100%", height: "100%" }}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
