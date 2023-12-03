"use client";

import Link from "next/link";

const Error = () => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <Link href="/">Go Back to home</Link>
    </div>
  );
};

export default Error;
