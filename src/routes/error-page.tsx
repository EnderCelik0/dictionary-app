import { useRouteError } from "react-router-dom";

type ErrorWithMessage = {
  message: string;
};

export default function ErrorPage() {
  const error = useRouteError();

  // Type assertion to ensure that error is treated as an object with a message or statusText
  const errorMessage =
    (error as ErrorWithMessage).message ||
    (error as ErrorWithMessage).statusText ||
    "Unknown error";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>{errorMessage}</p>
    </div>
  );
}
