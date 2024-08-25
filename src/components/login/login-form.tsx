"use client";




import { login } from "@/app/auth/auth";
import { LOGIN_FORM } from "@/constants";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div>
        <label htmlFor="email">{LOGIN_FORM.emailInput}</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder={LOGIN_FORM.emailInput}
          className="input w-full max-w-xs"
          required
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="password">{LOGIN_FORM.passwordInput}</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder={LOGIN_FORM.passwordInput}
          className="input w-full max-w-xs"
          required
        />
        {state?.errors?.password && (
          <p className="text-sm text-red-500">{state.errors.password}</p>
        )}
      </div>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
      <LoginButton />
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      ></div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="mt-4 w-fit btn btn-outline btn-primary bg-primary text-white px-4 py-2 rounded-lg"
      aria-disabled={pending}
    >
      {LOGIN_FORM.loginButton}
    </button>
  );
}
