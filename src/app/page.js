import { sites, categories } from "../../data/sites";
import HomeTemplate from "../components/templates/HomeTemplate";
import Button from "../components/atoms/Button";
import { Heading } from "../components/atoms/Typography";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading level={1} light>
            Discover the heritage of Pangasinan
          </Heading>
          <p className="hero__text">
            From the islands of Alaminos to the old churches of Bolinao, find places worth visiting in the province.
          </p>
          <Button href="#sites" variant="accent">
            Browse heritage sites
          </Button>
        </div>
      </section>

      <HomeTemplate sites={sites} categories={categories} />
    </>
  );
}
