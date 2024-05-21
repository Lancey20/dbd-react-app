import React, { useState, useEffect } from 'react';
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
    const killerAlias = killer.alias ? killer.alias.toLowerCase() : '';
    return killerName.includes(searchTerm) || killerAlias.includes(searchTerm);
  });

  return (
    <div className="main-content">
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
                  <p><strong>TLDR:</strong> {killer.TLDR}</p>
                  <p><strong>Abilities:</strong> {killer.abilities || 'undefined'}</p>
                  <p><strong>Playstyle:</strong> {killer.playstyle || 'undefined'}</p>
                  {killer.alias && <p><strong>Alias:</strong> {killer.alias}</p>}
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
