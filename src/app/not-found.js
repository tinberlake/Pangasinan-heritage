import Button from "../components/atoms/Button";
import { Heading, Text } from "../components/atoms/Typography";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container section">
      <Heading level={1}>Page not found</Heading>
      <Text>Sorry, we could not find that page.</Text>
      <Button href="/">Go back home</Button>
    </div>
  );
}
