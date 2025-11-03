import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, MapPin, Users, TrendingUp, ExternalLink, 
  BadgeCheck, Clock, Building, Sparkles, Filter
} from 'lucide-react'

export default function Dashboard() {
  const [sortBy, setSortBy] = useState('score')
  const [filterConfidence, setFilterConfidence] = useState('all')

  const sampleEvents = [
    {
      id: 1,
      name: 'UK Asset Management & Digital Transformation Summit 2025',
      date: '2025-03-15',
      endDate: '2025-03-16',
      location: 'London',
      organiser: 'Event Organiser Ltd',
      type: 'Conference',
      score: 92,
      scores: {
        icp: 95,
        competitors: 100,
        audience: 88,
        speaking: 100,
        commercials: 70,
        timing: 95
      },
      confidence: 'high',
      attendance: 800,
      competitors: ['AssetTech Solutions', 'FacilityPro', 'DigitalTwin Systems', 'MaintenanceMaster'],
      topics: ['Asset Management', 'Digital Twins', 'Predictive Maintenance'],
      icpRoles: ['Head of Asset Management', 'Facilities Manager'],
      sectors: ['Utilities', 'Manufacturing'],
      speakingOpportunity: true,
      cfpDeadline: '2025-02-15',
      changeLog: 'NEW',
      url: 'https://example.com/event1'
    },
    {
      id: 2,
      name: 'Infrastructure & Smart Facilities Conference',
      date: '2025-04-22',
      endDate: '2025-04-23',
      location: 'Manchester',
      organiser: 'InfraEvents UK',
      type: 'Conference',
      score: 87,
      scores: {
        icp: 90,
        competitors: 85,
        audience: 85,
        speaking: 90,
        commercials: 75,
        timing: 90
      },
      confidence: 'high',
      attendance: 600,
      competitors: ['CompetitorCorp', 'SmartFacilities Co', 'InfrastructurePlus'],
      topics: ['Infrastructure', 'Smart Buildings', 'Facilities Management'],
      icpRoles: ['Operations Director', 'Estate Manager'],
      sectors: ['Utilities', 'Infrastructure', 'Transport'],
      speakingOpportunity: true,
      cfpDeadline: '2025-03-01',
      changeLog: 'NEW',
      url: 'https://example.com/event2'
    },
    {
      id: 3,
      name: 'Industrial IoT & Predictive Maintenance Expo',
      date: '2025-05-10',
      endDate: '2025-05-12',
      location: 'Birmingham',
      organiser: 'IoT Events International',
      type: 'Exhibition',
      score: 84,
      scores: {
        icp: 88,
        competitors: 90,
        audience: 80,
        speaking: 75,
        commercials: 70,
        timing: 85
      },
      confidence: 'high',
      attendance: 700,
      competitors: ['PredictiveIQ', 'IoT Asset Manager', 'EnergyOptima', 'DigitalTwin Systems', 'AssetTech Solutions'],
      topics: ['Industrial IoT', 'Predictive Maintenance', 'Smart Manufacturing'],
      icpRoles: ['Reliability Engineer', 'Maintenance Manager'],
      sectors: ['Manufacturing', 'Energy'],
      speakingOpportunity: false,
      cfpDeadline: null,
      changeLog: 'UPDATED',
      url: 'https://example.com/event3'
    },
    {
      id: 4,
      name: 'Energy & Utilities Asset Management Forum',
      date: '2025-06-05',
      endDate: '2025-06-06',
      location: 'Edinburgh',
      organiser: 'Energy Sector Events',
      type: 'Conference',
      score: 81,
      scores: {
        icp: 95,
        competitors: 70,
        audience: 75,
        speaking: 80,
        commercials: 65,
        timing: 80
      },
      confidence: 'high',
      attendance: 400,
      competitors: ['EnergyOptima', 'AssetTech Solutions'],
      topics: ['Energy Management', 'Utilities', 'Asset Management'],
      icpRoles: ['Head of Asset Management', 'Asset Director'],
      sectors: ['Utilities', 'Energy'],
      speakingOpportunity: true,
      cfpDeadline: '2025-04-15',
      changeLog: 'NEW',
      url: 'https://example.com/event4'
    },
    {
      id: 5,
      name: 'Facilities Management & Smart Buildings Summit',
      date: '2025-07-08',
      endDate: '2025-07-09',
      location: 'London',
      organiser: 'FM Events Group',
      type: 'Conference',
      score: 78,
      scores: {
        icp: 85,
        competitors: 75,
        audience: 80,
        speaking: 70,
        commercials: 70,
        timing: 75
      },
      confidence: 'medium',
      attendance: 550,
      competitors: ['FacilityPro', 'SmartFacilities Co', 'CompetitorCorp'],
      topics: ['Facilities Management', 'Smart Buildings', 'Real Estate'],
      icpRoles: ['Facilities Manager', 'Property Manager'],
      sectors: ['Real Estate', 'Local Government'],
      speakingOpportunity: true,
      cfpDeadline: '2025-05-20',
      changeLog: 'UPDATED',
      url: 'https://example.com/event5'
    },
  ]

  const sortedEvents = [...sampleEvents].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score
    if (sortBy === 'date') return new Date(a.date) - new Date(b.date)
    return 0
  })

  const filteredEvents = filterConfidence === 'all' 
    ? sortedEvents 
    : sortedEvents.filter(e => e.confidence === filterConfidence)

  const getScoreColor = (score) => {
    if (score >= 80) return 'bg-green-500'
    if (score >= 60) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getScoreBadgeColor = (score) => {
    if (score >= 80) return 'bg-green-100 text-green-700'
    if (score >= 60) return 'bg-yellow-100 text-yellow-700'
    return 'bg-red-100 text-red-700'
  }

  const stats = {
    total: sampleEvents.length,
    new: sampleEvents.filter(e => e.changeLog === 'NEW').length,
    updated: sampleEvents.filter(e => e.changeLog === 'UPDATED').length,
    avgScore: Math.round(sampleEvents.reduce((sum, e) => sum + e.score, 0) / sampleEvents.length),
    highConfidence: sampleEvents.filter(e => e.confidence === 'high').length,
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Event Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Top events ranked by overall suitability score
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary-600 mb-1">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Events</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">{stats.new}</div>
          <div className="text-sm text-gray-600">New Events</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">{stats.updated}</div>
          <div className="text-sm text-gray-600">Updated</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-600 mb-1">{stats.avgScore}</div>
          <div className="text-sm text-gray-600">Avg Score</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-teal-600 mb-1">{stats.highConfidence}</div>
          <div className="text-sm text-gray-600">High Confidence</div>
        </div>
      </div>

      {/* Filters */}
      <div className="card flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-700">Filters:</span>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="score">Sort by Score</option>
          <option value="date">Sort by Date</option>
        </select>
        <select
          value={filterConfidence}
          onChange={(e) => setFilterConfidence(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="all">All Confidence Levels</option>
          <option value="high">High Confidence</option>
          <option value="medium">Medium Confidence</option>
          <option value="low">Low Confidence</option>
        </select>
      </div>

      {/* Events List */}
      <div className="space-y-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{event.name}</h3>
                  {event.changeLog === 'NEW' && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      NEW
                    </span>
                  )}
                  {event.changeLog === 'UPDATED' && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      UPDATED
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    ~{event.attendance} attendees
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {event.type}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className={`px-4 py-2 rounded-lg ${getScoreBadgeColor(event.score)} font-bold text-2xl`}>
                  {event.score}
                </div>
                <div className="text-xs text-gray-500">Overall Score</div>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                >
                  View Event
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Score Breakdown */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Score Breakdown</h4>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {Object.entries(event.scores).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-xs text-gray-600 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className={`h-2 rounded-full ${getScoreColor(value)} mb-1`} style={{ width: '100%' }}></div>
                    <div className="text-xs font-semibold text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* ICP Match */}
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4" />
                  ICP Match
                </h5>
                <div className="space-y-1">
                  <div className="text-xs text-gray-600">
                    <strong>Roles:</strong> {event.icpRoles.join(', ')}
                  </div>
                  <div className="text-xs text-gray-600">
                    <strong>Sectors:</strong> {event.sectors.join(', ')}
                  </div>
                </div>
              </div>

              {/* Competitors */}
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Competitors ({event.competitors.length})
                </h5>
                <div className="flex flex-wrap gap-1">
                  {event.competitors.map((comp, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Speaking Opportunity */}
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Speaking
                </h5>
                {event.speakingOpportunity ? (
                  <div className="text-xs text-gray-600">
                    <div className="text-green-600 font-semibold mb-1">✓ Opportunities Available</div>
                    {event.cfpDeadline && (
                      <div>
                        <strong>CFP Deadline:</strong>{' '}
                        {new Date(event.cfpDeadline).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-gray-500">No current opportunities</div>
                )}
              </div>
            </div>

            {/* Topics */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {event.topics.map((topic, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

