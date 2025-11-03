import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Info, Sliders } from 'lucide-react'

export default function Scoring() {
  const [weights, setWeights] = useState({
    icp: 30,
    competitors: 20,
    audience: 20,
    speaking: 15,
    commercials: 10,
    timing: 5,
  })

  const [scores, setScores] = useState({
    icp: 90,
    competitors: 80,
    audience: 75,
    speaking: 70,
    commercials: 65,
    timing: 90,
  })

  const [showDetails, setShowDetails] = useState(null)

  const calculateOverall = () => {
    const total = 
      (scores.icp * weights.icp / 100) +
      (scores.competitors * weights.competitors / 100) +
      (scores.audience * weights.audience / 100) +
      (scores.speaking * weights.speaking / 100) +
      (scores.commercials * weights.commercials / 100) +
      (scores.timing * weights.timing / 100)
    return Math.round(total)
  }

  const overallScore = calculateOverall()

  const scoreCategories = [
    {
      id: 'icp',
      name: 'ICP Fit',
      description: 'Relevance to target job roles/sectors and product alignment',
      color: 'bg-blue-500',
      details: 'Job role matches (+10 per match, max 20), Sector matches (+5 per match, max 10), Topic keyword matches (+3 per match, max 10). Normalized to 0-100 scale.',
      maxPoints: 30
    },
    {
      id: 'competitors',
      name: 'Competitor Density',
      description: 'Number and relevance of competitors exhibiting/speaking',
      color: 'bg-purple-500',
      details: 'Competitors present (+7 per competitor, max 20), Evidence quality (+3 if strong). Normalized to 0-100 scale.',
      maxPoints: 20
    },
    {
      id: 'audience',
      name: 'Audience Scale & Quality',
      description: 'Attendance size, seniority, buyer vs. vendor ratio',
      color: 'bg-green-500',
      details: 'Attendance size (logarithmic scale), Seniority indicators (+5 if noted). Normalized to 0-100 scale.',
      maxPoints: 20
    },
    {
      id: 'speaking',
      name: 'Speaking Opportunity',
      description: 'Availability and relevance of speaking slots/panels',
      color: 'bg-orange-500',
      details: 'CFP open (+10), Speaking slots available (+5), Agenda fit (+3). Normalized to 0-100 scale.',
      maxPoints: 15
    },
    {
      id: 'commercials',
      name: 'Commercial Practicality',
      description: 'Indicative cost vs. reach/value',
      color: 'bg-red-500',
      details: 'Cost per attendee heuristic: <£20 (10pts), <£50 (7pts), <£100 (5pts), else (3pts). Normalized to 0-100 scale.',
      maxPoints: 10
    },
    {
      id: 'timing',
      name: 'Timing & Logistics',
      description: 'Date suitability, lead time for planning, clashes',
      color: 'bg-teal-500',
      details: 'Lead time adequacy (+3 if 60-180 days), Date suitability (+2 if no clashes). Normalized to 0-100 scale.',
      maxPoints: 5
    },
  ]

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getOverallColor = (score) => {
    if (score >= 80) return 'from-green-500 to-emerald-600'
    if (score >= 60) return 'from-yellow-500 to-orange-500'
    return 'from-red-500 to-pink-500'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Scoring System
        </h1>
        <p className="text-lg text-gray-600">
          Interactive scoring calculator with transparent, configurable weights
        </p>
      </div>

      {/* Overall Score Display */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`card bg-gradient-to-r ${getOverallColor(overallScore)} text-white`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm mb-1">Overall Suitability Score</p>
            <h2 className="text-6xl font-bold">{overallScore}</h2>
            <p className="text-white/80 mt-2">Out of 100</p>
          </div>
          <div className="text-right">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm text-white/80">
              {overallScore >= 80 ? 'Excellent Match' : 
               overallScore >= 60 ? 'Good Match' : 
               'Consider Review'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Weight Configuration */}
      <div className="card">
        <div className="flex items-center gap-2 mb-6">
          <Sliders className="w-5 h-5 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Scoring Weights</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Adjust weights to customize scoring priorities (must sum to 100%)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {scoreCategories.map((category) => (
            <div key={category.id} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {category.name}
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={weights[category.id]}
                onChange={(e) => {
                  const newWeights = { ...weights, [category.id]: parseInt(e.target.value) || 0 }
                  const total = Object.values(newWeights).reduce((a, b) => a + b, 0)
                  if (total <= 100) {
                    setWeights(newWeights)
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <div className="text-xs text-gray-500">
                {weights[category.id]}%
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Total Weight:</span>
            <span className={`font-bold ${Object.values(weights).reduce((a, b) => a + b, 0) === 100 ? 'text-green-600' : 'text-red-600'}`}>
              {Object.values(weights).reduce((a, b) => a + b, 0)}%
            </span>
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="card">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary-600" />
          <h2 className="text-2xl font-bold text-gray-900">Score Breakdown</h2>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Adjust individual scores to see impact on overall rating
        </p>

        <div className="space-y-6">
          {scoreCategories.map((category) => {
            const currentScore = scores[category.id]
            const contribution = Math.round((currentScore * weights[category.id]) / 100)
            const isExpanded = showDetails === category.id

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 ${category.color} rounded-full`}></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(currentScore)}`}>
                      {currentScore}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Contributes: {contribution} points
                    </div>
                  </div>
                </div>

                {/* Score Slider */}
                <div className="mb-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={currentScore}
                    onChange={(e) => setScores({ ...scores, [category.id]: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Details Toggle */}
                <button
                  onClick={() => setShowDetails(isExpanded ? null : category.id)}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                >
                  {isExpanded ? 'Hide' : 'Show'} calculation details
                  <TrendingUp className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {/* Details Panel */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Max Points:</strong> {category.maxPoints} points (normalized to 0-100 scale)
                    </p>
                    <p className="text-sm text-gray-700">{category.details}</p>
                    <div className="mt-3 p-3 bg-white rounded border-l-4 border-primary-500">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Calculation:</p>
                      <p className="text-xs text-gray-600">
                        Score: {currentScore} × Weight: {weights[category.id]}% = {contribution} points contribution
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Weight Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Weight: {weights[category.id]}%</span>
                    <span>Contribution: {contribution} points</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(contribution / overallScore) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Formula Display */}
      <div className="card bg-gray-50">
        <h3 className="font-semibold text-gray-900 mb-4">Scoring Formula</h3>
        <div className="bg-white p-4 rounded-lg border border-gray-200 font-mono text-sm">
          <div className="text-gray-700 mb-2">
            <strong>Overall Score</strong> = 
          </div>
          <div className="space-y-1 text-gray-600 ml-4">
            <div>(ICP Fit × {weights.icp}%) +</div>
            <div>(Competitor Density × {weights.competitors}%) +</div>
            <div>(Audience Scale × {weights.audience}%) +</div>
            <div>(Speaking Opportunity × {weights.speaking}%) +</div>
            <div>(Commercial Practicality × {weights.commercials}%) +</div>
            <div>(Timing & Logistics × {weights.timing}%)</div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-lg font-bold text-primary-600">
              = {overallScore} / 100
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

