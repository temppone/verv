import { useState } from "react";

export interface ISendSimpleMessageParams {
  name: string;
  email: string;
  message: string;
}

export function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  const sendSimpleMessage = async ({
    name,
    email,
    message,
  }: ISendSimpleMessageParams) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/email/send-email", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        return { success: true, data: result.data };
      } else {
        setError(new Error(result.error));
        return { success: false, error: result.error };
      }
    } catch (error: any) {
      setError(error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendSimpleMessage, isLoading, error, success };
}
