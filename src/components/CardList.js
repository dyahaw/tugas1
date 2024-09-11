import React, { useState } from "react";
import Card from "./Card";
import TableView from "./TableView";
import { FaThList, FaThLarge } from "react-icons/fa";
import "./CardList.css";

const CardList = ({ people }) => {
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");
  const [animate, setAnimate] = useState(false);

  const handleViewChange = (newView) => {
    if (newView !== view) {
      setAnimate(true);
      setTimeout(() => {
        setView(newView);
        setAnimate(false);
      }, 300);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSortChange = (event) => {
    setSortField(event.target.value);
  };

  const filteredPeople = people
    .filter(
      (person) =>
        person.name.toLowerCase().includes(searchTerm) ||
        person.university.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
      return 0;
    });

  return (
    <div className="content-wrapper">
      <div className="header-space">
        <h1>Team Members Front End 3</h1>
      </div>
      <div className="search-sort-bar">
        <input
          type="text"
          placeholder="Search team members..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="university">University</option>
        </select>
      </div>
      <div className="view-switcher">
        <FaThList
          onClick={() => handleViewChange("list")}
          size={20}
          className={view === "list" ? "active" : ""}
        />
        <FaThLarge
          onClick={() => handleViewChange("grid")}
          size={20}
          className={view === "grid" ? "active" : ""}
        />
      </div>
      <div className={`transition-wrapper ${animate ? 'fade-out' : ''}`}>
        {view === "grid" ? (
          <div className={`grid fade-in`}>
            {filteredPeople.map((person, index) => (
              <Card key={index} person={person} />
            ))}
          </div>
        ) : (
          <TableView people={filteredPeople} />
        )}
      </div>
    </div>
  );
};

export default CardList;
