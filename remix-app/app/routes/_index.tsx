import type { MetaFunction } from "@remix-run/node";
import { Test } from "~/components/test";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
        <Test>Testing</Test>
  );
}
