"use client";
import React, { useState } from "react"

const res = await fetch("https://fakestoreapi.com/products")

const data = await res.json();
const products = Object.values(data);

const SearchBar = () => {
  const [searchText, setSearchText] = useState("")

  const handleInputChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") setSearchText("");
    if (event.key === "Enter") submit();
  }

  return (
    <main>
      <input 
        type="text" 
        value={searchText} 
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}>
        {products.filter((product) => {
          return product.title.toUpperCase().includes(searchText.toUpperCase())
        }).map((product) => {
          return <article key={product.id} style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "3px solid black",
            borderRadius: 12,
            padding: 16,
            aspectRatio: "3 / 4",
            margin: 10,
          }}>
            <h3 style={{
              height: "4em"
            }}>{product.title.toString()}</h3>
            <div style={{aspectRatio: "3 / 3", width: "100%", overflow: "hidden"}}>
              <img src={product.image} style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center",
              }} />
            </div>
            <p>${`${(product.price).toFixed(2)}`}</p>
          </article>
        })}
      </section>
    </main>
  );
}

export default SearchBar
