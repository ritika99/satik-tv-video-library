export function HeaderMenu({headerToggle, setHeaderToggle}) {
  return (
    <div
      className="header-menu"
      onClick={() => setHeaderToggle((headerToggle) => !headerToggle)}
    >
      <i
        className={
          headerToggle ? "icon-menu fas fa-times" : "icon-menu fas fa-bars"
        }
      ></i>
    </div>
  );
}
