import { Heading, Text } from "../../components/atoms/Typography";

export const metadata = {
  title: "About",
  description: "About the Pangasinan Heritage Digital Showcase project.",
};

export default function AboutPage() {
  return (
    <div className="container section">
      <Heading level={1}>About this project</Heading>
      <Text>
        The Pangasinan Heritage Digital Showcase is a class project that presents well-known heritage sites in the
        province. It is built to load quickly on mobile data, work on small screens and be usable with a keyboard or
        screen reader.
      </Text>
      <Text>
        The site is made of small reusable components organized with Atomic Design, so new heritage sites can be added
        by editing one data file.
      </Text>
    </div>
  );
}
