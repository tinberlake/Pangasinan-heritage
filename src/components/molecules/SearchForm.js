import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

// Search by name plus a category filter. It does not keep its own state;
// the parent passes the values and the change handlers (controlled form).
export default function SearchForm({ query, category, categories, onQueryChange, onCategoryChange }) {
  function handleSubmit(event) {
    event.preventDefault(); // results already update while typing
  }

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <div className="search-form__field">
        <label htmlFor="site-search">Search by name</label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="e.g. Hundred Islands"
        />
      </div>

      <div className="search-form__field">
        <label htmlFor="site-category">Category</label>
        <select id="site-category" value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="All">All categories</option>
          {categories.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit">
        <Icon name="search" size={18} />
        Search
      </Button>
    </form>
  );
}
