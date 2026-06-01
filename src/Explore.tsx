import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type StudySpot = {
  id: number
  name: string
  campusArea: string
  rating: number
}

function Explore() {
  const [spots, setSpots] = useState<StudySpot[]>([])
  const [search, setSearch] = useState('')

    const navigate = useNavigate()

  useEffect(() => {
    //hardcoded for now
    setSpots([
      { id: 1, name: 'UTown Library', campusArea: 'UTown', rating: 4.6 },
      { id: 2, name: 'Central Library', campusArea: 'Kent Ridge', rating: 4.4 },
      { id: 3, name: 'Science Library', campusArea: 'Science', rating: 4.2 }
    ])
  }, [])

  const filteredSpots = spots.filter((spot) =>
    spot.name.toLowerCase().includes(search.toLowerCase())
  ) //search filter, no need to press enter to search

  return (
    <div className="page">

      <div className="navbar">
        <div className="navbarLinks">
          <Link to="/explore">Explore</Link>
          <Link to="/maps">Maps</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/suggest">Suggest a Spot</Link>
        </div>

        <button
            className="logoutButton"
            onClick={() => navigate('/')}
        >
            Log Out
        </button>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search study spots..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* bc i want card layout */}
      <div className="cardGrid">
        {filteredSpots.map((spot) => (
          <div key={spot.id} className="card">
            <h3>{spot.name}</h3>
            <p>{spot.campusArea}</p>
            <p>⭐ {spot.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore