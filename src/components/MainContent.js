import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../App.css';
import killers from './data';

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      const importedImages = {};
      for (const killer of killers) {
        importedImages[killer.name] = await import(`./images/${killer.image}`);
      }
      setImages(importedImages);
    };
    importImages();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredKillers = killers.filter(killer => {
    const killerName = killer.name.toLowerCase();
    const aliases = killer.alias.map(alias => alias.toLowerCase());
    return killerName.includes(searchTerm) || aliases.some(alias => alias.includes(searchTerm));
  });

  return (
    <div className="main-content">
      <Helmet>
        <title>Dead by Daylight Killer Counters</title>
        <meta name="description" content="Find detailed guides and counter strategies for all dbd killers"/>
        <meta name="keywords" content="Dead by Daylight, DBD, dbd, killers, guide, counters, tips" />
      </Helmet>
      <section id="killers">
        <h2>Killers</h2>
        <input
          type="text"
          id="searchBar"
          placeholder="Search Killers..."
          onChange={handleSearch}
        />
        <div id="killerContainer">
          {filteredKillers.map(killer => (
            <div key={killer.name} className="killer-box" id={killer.name.replace(/\s+/g, '')}>
              <div className="killer-left">
                <h2 className="killer-name">{killer.name}</h2>
                {images[killer.name] && (
                  <img src={images[killer.name].default} alt={killer.name} className="killer-image" />
                )}
              </div>
              <div className="killer-right">
                <div className="killer-details">
                  <p><strong>Counter:</strong> {killer.TLDR}</p>
                  <p><strong>Abilities:</strong> {killer.strength || 'undefined'}</p>
                  <p><strong>Playstyle:</strong> {killer.weakness || 'undefined'}</p>
                  <p><strong>Alias:</strong> {killer.alias.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
