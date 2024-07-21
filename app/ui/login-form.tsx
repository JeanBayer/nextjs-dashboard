"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { authenticate } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import { ThirdPartyButton } from "@/app/ui/button/third-party-button";
import { lusitana } from "@/app/ui/fonts";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <>
      <form action={formAction} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={`${lusitana.className} mb-3 text-2xl`}>
            Please log in to continue.
          </h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>
          <Button
            className="mt-4 w-full"
            aria-disabled={isPending}
            type="submit"
          >
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <Link
            className="flex h-10  items-center rounded-lg px-4 text-sm font-medium text-gray-900 transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 w-full"
            aria-disabled={isPending}
            href="/signup"
          >
            Don&apos;t have an account? Sign up here.
          </Link>
          <div className="flex items-center space-x-4 my-8">
            <div className="h-[1px] bg-gray-200 flex-grow"></div>
            <p className="text-sm text-gray-500">or</p>
            <div className="h-[1px] bg-gray-200 flex-grow"></div>
          </div>

          <ThirdPartyButton type="github" />

          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
