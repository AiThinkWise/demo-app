import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Clock, Database, Search, Merge, Filter, 
  Sparkles, Calculator, BarChart3, CheckCircle2,
  ArrowRight, Play, Pause, RotateCcw
} from 'lucide-react'

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [currentExecutionStep, setCurrentExecutionStep] = useState(null)

  const workflowSteps = [
    {
      id: 'trigger',
      title: 'Weekly Schedule Trigger',
      icon: Clock,
      description: 'Automated weekly run every Monday at 9:00 AM',
      color: 'bg-blue-500',
      details: 'N8N CRON trigger initiates the workflow automatically. This ensures consistent weekly discovery without manual intervention.',
      output: 'Workflow execution started'
    },
    {
      id: 'init',
      title: 'Initialize Run Log',
      icon: Database,
      description: 'Create entry in Airtable Runs table',
      color: 'bg-green-500',
      details: 'Logs the workflow execution start time and status. Tracks all runs for monitoring and debugging.',
      output: 'Run log created with status: running'
    },
    {
      id: 'discovery',
      title: 'Event Discovery (Parallel)',
      icon: Search,
      description: 'Search multiple sources simultaneously',
      color: 'bg-purple-500',
      details: 'Parallel execution from 5 sources: Eventbrite, 10Times, Association Calendars, Competitor Pages, Trade Show Directories. All searches run simultaneously for efficiency.',
      output: '25 events discovered from all sources',
      sources: ['Eventbrite API', '10Times', 'Associations', 'Competitors', 'Trade Shows']
    },
    {
      id: 'merge',
      title: 'Merge All Events',
      icon: Merge,
      description: 'Combine results from all sources',
      color: 'bg-indigo-500',
      details: 'Aggregates all discovered events into a single list, handling duplicates and normalizing formats.',
      output: '25 events merged into unified list'
    },
    {
      id: 'normalize',
      title: 'Normalize Event Data',
      icon: Filter,
      description: 'Standardize field names and formats',
      color: 'bg-pink-500',
      details: 'Ensures consistent data structure: standardized dates, cleaned URLs, uniform field names across all sources.',
      output: 'All events normalized to standard format'
    },
    {
      id: 'dedupe',
      title: 'Deduplication Check',
      icon: CheckCircle2,
      description: 'Match against existing events',
      color: 'bg-yellow-500',
      details: 'Primary match: Event URL. Secondary: Event Name + Date. Prevents duplicate entries in database.',
      output: '5 new events, 20 existing events identified'
    },
    {
      id: 'enrich',
      title: 'Enrich Event Data',
      icon: Sparkles,
      description: 'Extract additional information',
      color: 'bg-teal-500',
      details: 'For each event: fetch exhibitor lists, agenda/speakers, attendance data, competitor presence, ICP roles, sectors.',
      output: 'All events enriched with additional data',
      enrichments: ['Exhibitors', 'Agenda', 'Attendance', 'Competitors', 'ICP Roles']
    },
    {
      id: 'score',
      title: 'Calculate Scores',
      icon: Calculator,
      description: 'Compute 6-factor suitability scores',
      color: 'bg-red-500',
      details: 'Calculates ICP Fit (30%), Competitor Density (20%), Audience (20%), Speaking (15%), Commercials (10%), Timing (5%). Weighted sum produces Overall Score (0-100).',
      output: 'Scores calculated for all events'
    },
    {
      id: 'update',
      title: 'Update Database',
      icon: Database,
      description: 'Create/update Airtable records',
      color: 'bg-green-600',
      details: 'New events: Create records. Existing events: Update with new data and recalculated scores.',
      output: '5 events created, 20 events updated in Airtable'
    },
    {
      id: 'dashboard',
      title: 'Generate Dashboard',
      icon: BarChart3,
      description: 'Prepare ranked event list',
      color: 'bg-orange-500',
      details: 'Queries top 10 events by Overall Score. Generates change log for new/updated events. Prepares data for dashboard view.',
      output: 'Dashboard updated with top 10 events'
    },
    {
      id: 'complete',
      title: 'Complete & Log',
      icon: CheckCircle2,
      description: 'Update run log with results',
      color: 'bg-emerald-600',
      details: 'Marks run as completed. Records statistics: events found, new, updated. Stores execution time and any errors.',
      output: 'Run completed successfully in 22 minutes'
    }
  ]

  const handleRunWorkflow = () => {
    if (isRunning) {
      setIsRunning(false)
      setCurrentExecutionStep(null)
      return
    }

    setIsRunning(true)
    let stepIndex = 0

    const interval = setInterval(() => {
      if (stepIndex < workflowSteps.length) {
        setCurrentExecutionStep(workflowSteps[stepIndex].id)
        setActiveStep(workflowSteps[stepIndex].id)
        stepIndex++
      } else {
        clearInterval(interval)
        setIsRunning(false)
        setCurrentExecutionStep(null)
      }
    }, 2000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Workflow Visualization
        </h1>
        <p className="text-lg text-gray-600">
          Interactive walkthrough of the automated event discovery and scoring pipeline
        </p>
      </div>

      {/* Controls */}
      <div className="card flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={handleRunWorkflow}
            className={`btn-primary inline-flex items-center gap-2 ${
              isRunning ? 'bg-red-600 hover:bg-red-700' : ''
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5" />
                Pause Execution
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Run Workflow
              </>
            )}
          </button>
          <button
            onClick={() => {
              setActiveStep(null)
              setCurrentExecutionStep(null)
            }}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>
        <div className="text-sm text-gray-600">
          Click any step for detailed information
        </div>
      </div>

      {/* Workflow Diagram */}
      <div className="card">
        <div className="space-y-4">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === step.id
            const isExecuting = currentExecutionStep === step.id

            return (
              <div key={step.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-primary-500 bg-primary-50'
                      : isExecuting
                      ? 'border-green-500 bg-green-50 animate-pulse'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveStep(isActive ? null : step.id)}
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    {index + 1}
                  </div>

                  {/* Icon & Content */}
                  <div className="flex-1 flex items-center gap-4">
                    <Icon className={`w-6 h-6 ${isActive ? 'text-primary-600' : 'text-gray-600'}`} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                      {isExecuting && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2 }}
                          className="h-1 bg-green-500 rounded mt-2"
                        />
                      )}
                    </div>
                    {isActive && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        className="text-primary-600"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Step Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2 ml-16 p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <p className="text-gray-700 mb-3">{step.details}</p>
                      {step.sources && (
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Sources:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.sources.map((source, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                {source}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {step.enrichments && (
                        <div className="mb-3">
                          <p className="text-sm font-semibold text-gray-700 mb-2">Enrichments:</p>
                          <div className="flex flex-wrap gap-2">
                            {step.enrichments.map((enrich, i) => (
                              <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                {enrich}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div className="mt-3 p-3 bg-white rounded border-l-4 border-primary-500">
                        <p className="text-sm font-semibold text-gray-700 mb-1">Output:</p>
                        <p className="text-sm text-gray-600">{step.output}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Connector Arrow */}
                {index < workflowSteps.length - 1 && (
                  <div className="ml-6 h-6 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Execution Summary */}
      {currentExecutionStep && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200"
        >
          <h3 className="font-semibold text-gray-900 mb-2">Execution Progress</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-white rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{
                  width: `${((workflowSteps.findIndex(s => s.id === currentExecutionStep) + 1) / workflowSteps.length) * 100}%`
                }}
                transition={{ duration: 2 }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {workflowSteps.findIndex(s => s.id === currentExecutionStep) + 1} / {workflowSteps.length}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}

