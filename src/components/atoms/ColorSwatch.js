// Shows one color token. The colors themselves are defined as CSS variables
// in src/styles/tokens.css. This component is only used on the style guide page.
export default function ColorSwatch({ name, variable, hex }) {
  return (
    <div className="swatch">
      <div className="swatch__color" style={{ background: `var(${variable})` }} />
      <p className="swatch__name">{name}</p>
      <p className="swatch__code">
        {variable} · {hex}
      </p>
    </div>
  );
}
