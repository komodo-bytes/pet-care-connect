// src/components/MatchList.js
import React, { useEffect, useState } from 'react';

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // TODO: Fetch matches from backend
  }, []);

  return (
    <div>
      <h2>Potential Godparents</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>{match.name} - {match.petType} lover</li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;