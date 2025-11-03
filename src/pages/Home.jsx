import { Link } from 'react-router-dom'
import { ArrowRight, Workflow, TrendingUp, BarChart3, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      icon: Workflow,
      title: 'Automated Discovery',
      description: 'Multi-source event discovery from Eventbrite, 10Times, competitors, and more',
      link: '/workflow',
    },
    {
      icon: TrendingUp,
      title: 'Intelligent Scoring',
      description: '6-factor scoring model with configurable weights for transparent evaluation',
      link: '/scoring',
    },
    {
      icon: BarChart3,
      title: 'Dashboard & Reports',
      description: 'Ranked event list with sub-score breakdown and actionable insights',
      link: '/dashboard',
    },
    {
      icon: Zap,
      title: 'Weekly Automation',
      description: 'Scheduled weekly runs via N8N with comprehensive error handling',
      link: '/workflow',
    },
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Event Discovery & Scoring
          <span className="text-primary-600"> Automation</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Continuously discover, evaluate, and prioritize UK field events relevant 
          to your ICP using intelligent automation and transparent scoring.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/workflow" className="btn-primary inline-flex items-center gap-2">
            Explore Workflow
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/dashboard" className="btn-secondary inline-flex items-center gap-2">
            View Dashboard
            <BarChart3 className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Data Sources', value: '5+' },
          { label: 'Scoring Factors', value: '6' },
          { label: 'Execution Time', value: '20-30 min' },
          { label: 'Automation', value: 'Weekly' },
        ].map((metric, index) => (
          <div key={index} className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {metric.value}
            </div>
            <div className="text-gray-600">{metric.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Link
              key={index}
              to={feature.link}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4 text-primary-600 font-medium flex items-center gap-2">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="card"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '1', title: 'Discovery', desc: 'Search multiple sources' },
            { step: '2', title: 'Normalize', desc: 'Standardize data format' },
            { step: '3', title: 'Deduplicate', desc: 'Match existing events' },
            { step: '4', title: 'Enrich', desc: 'Extract additional data' },
            { step: '5', title: 'Score', desc: 'Calculate suitability' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                {item.step}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See It in Action?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Navigate through the interactive workflow, explore the scoring system, 
            and see sample dashboard results.
          </p>
          <Link to="/workflow" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2">
            Start Exploring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

