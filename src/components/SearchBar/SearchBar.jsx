import {Icon} from "@iconify/react";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="search">
      <Icon className="search__icon" icon="rivet-icons:magnifying-glass" />
      <input type="text" placeholder="What are you looking for?" className="search__input" />
    </div>
  );
}
