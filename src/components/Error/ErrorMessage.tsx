import React from "react";

export default function ErrorMessage({
  error,
}: {
  error?: { message?: string };
}) {
  if (!error?.message) return null;

  return (
    <div className="text-danger bg-danger-subtle p-1 px-3 rounded-3 mt-2">
      {error.message}
    </div>
  );
}
