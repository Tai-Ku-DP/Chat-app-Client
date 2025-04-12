import Image from "next/image";
import { FormItem } from "~/components";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { MailOpen } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useActionsLogin } from "./hook";
import { CardWrapper } from "../components";
import { IFormLogin, schema } from "./schema";

export const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  });

  const { submitLogin, loadingLogin } = useActionsLogin();

  return (
    <CardWrapper>
      <div className="flex flex-col gap-6">
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm overflow-hidden">
          <div className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-balance text-muted-foreground">
                    Login to your Acme Inc account
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
                        placeholder="m@example.com"
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
                  onClick={handleSubmit(submitLogin)}
                  isLoading={loadingLogin}
                >
                  Login
                </Button>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>

                <div>
                  <Button variant="outline" className="w-full">
                    <MailOpen />
                    <span>Login with Email</span>
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Sign up
                  </a>
                </div>
              </div>
            </form>

            <div className="relative hidden md:block ">
              <Image
                src="/images/image.jpeg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale rounded-md"
                style={{ width: "100%", height: "auto" }}
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By clicking continue, you agree to our{" "}
          <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </CardWrapper>
  );
};
