"use client";

import { useState } from "react";
import SearchForm from "../molecules/SearchForm";
import HeritageGrid from "../organisms/HeritageGrid";
import { Heading } from "../atoms/Typography";

// Home page body: search form + grid. It holds the search state
// and filters the list of sites that is passed in from the page.
export default function HomeTemplate({ sites, categories }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const visibleSites = sites.filter((site) => {
    const matchesName = site.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = category === "All" || site.category === category;
    return matchesName && matchesCategory;
  });

  return (
    <section id="sites" className="section" aria-labelledby="sites-heading">
      <div className="container">
        <Heading level={2} size="lg">
          <span id="sites-heading">Heritage sites</span>
        </Heading>
        <SearchForm
          query={query}
          category={category}
          categories={categories}
          onQueryChange={setQuery}
          onCategoryChange={setCategory}
        />
        <p className="result-count" aria-live="polite">
          Showing {visibleSites.length} of {sites.length} sites
        </p>
        <HeritageGrid sites={visibleSites} />
      </div>
    </section>
  );
}
