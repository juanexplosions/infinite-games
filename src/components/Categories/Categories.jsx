import { useState, useEffect } from "react";
import categories from "../../data/categories";
import "./Categories.scss";

export default function Categories() {
  return (
    <section className="categories">
      <h3 className="categories__title">Categories</h3>
      <ul className="categories__list">
        {categories.map((category, index) => (
          <li className="categories__item" key={index}>{category.category}</li>
        ))}
      </ul>
    </section>
  );
}
