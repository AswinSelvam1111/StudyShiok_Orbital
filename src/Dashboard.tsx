import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  // dummy stats (later from backend)
  const stats = {
    bookmarkedCount: 3,
    ratingsGiven: 12,
    avgRating: 4.3,
    notBusySpots: 5
  }

  // dummy bookmarked spot (reuse existing structure)
  const bookmarkedSpots = [
    { id: 1, name: 'ERC Level 2', campusArea: 'UTown', rating: 4.6, busyness: 'Moderately Busy' }
  ]

  return (
    <div className="page">

      {/* NAVBAR */}
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

      {/* TITLE */}
      <h1 className="pageTitle">Dashboard</h1>

      {/* STATS ROW */}
      <div className="statsGrid">

        <div className="statCard">
          <h3>Bookmarked Spots</h3>
          <p>{stats.bookmarkedCount}</p>
        </div>

        <div className="statCard">
          <h3>Ratings Given</h3>
          <p>{stats.ratingsGiven}</p>
        </div>

        <div className="statCard">
          <h3>Avg Rating Given</h3>
          <p>{stats.avgRating}</p>
        </div>

        <div className="statCard">
          <h3>Not Busy Spots</h3>
          <p>{stats.notBusySpots}</p>
        </div>

      </div>

      {/* BOOKMARKED SECTION */}
      <h2 className="sectionTitle">Your Bookmarked Spots</h2>

      <div className="cardGrid">
        {bookmarkedSpots.map((spot) => (
          <div key={spot.id} className="card">
            <h3>{spot.name}</h3>
            <p>{spot.campusArea}</p>
            <div className="cardInfoRow">
                <span><b>Rating:</b> {spot.rating} ⭐</span>
                <span><b>{spot.busyness}</b></span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Dashboard