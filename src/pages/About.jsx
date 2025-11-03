import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileText, Code, Database, Zap, ExternalLink } from 'lucide-react'
import Modal from '../components/Modal'

export default function About() {
  const [openModal, setOpenModal] = useState(null)
  const deliverables = [
    {
      icon: FileText,
      title: 'Documentation',
      items: [
        'Workflow Mockup & Architecture',
        'Technical Documentation',
        'Airtable Schema',
        'Setup README',
      ]
    },
    {
      icon: Code,
      title: 'N8N Workflow',
      items: [
        'Complete workflow JSON export',
        'All nodes configured',
        'Error handling',
        'Weekly automation',
      ]
    },
    {
      icon: Database,
      title: 'Database Schema',
      items: [
        'Events table with all fields',
        'Competitors table',
        'Scoring config table',
        'Run logs table',
      ]
    },
    {
      icon: Zap,
      title: 'Automation',
      items: [
        'Weekly scheduled runs',
        'Multi-source discovery',
        'Automated scoring',
        'Dashboard generation',
      ]
    },
  ]

  const features = [
    'Multi-source event discovery (5+ sources)',
    'Intelligent deduplication (URL + name+date matching)',
    'Transparent 6-factor scoring model',
    'Configurable scoring weights',
    'Automated data enrichment',
    'Comprehensive error handling',
    'Weekly automation via N8N',
    'Ranked dashboard with sub-score breakdown',
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About This Project
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A complete proof-of-concept for Event Discovery & Scoring Automation 
          demonstrating systematic approach to discovering, evaluating, and prioritizing 
          UK field events relevant to Asset Management ICP.
        </p>
      </div>

      {/* Key Features */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Deliverables</h2>
        <p className="text-gray-600 mb-4">
          Click on any deliverable to view detailed documentation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((deliverable, index) => {
            const Icon = deliverable.icon
            return (
              <button
                key={index}
                onClick={() => setOpenModal(index)}
                className="card text-left hover:shadow-lg transition-all cursor-pointer hover:border-primary-300 border-2 border-transparent"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{deliverable.title}</h3>
                    <p className="text-sm text-primary-600 mt-1 flex items-center gap-1">
                      View Details <ExternalLink className="w-3 h-3" />
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {deliverable.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </button>
            )
          })}
        </div>
      </div>

      {/* Modals for Deliverables */}
      <Modal
        isOpen={openModal === 0}
        onClose={() => setOpenModal(null)}
        title="Documentation - Complete Details"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">📋 Documentation Deliverables</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">1. WORKFLOW_MOCKUP.md</h4>
                <p className="text-gray-700 mb-2">Complete visual workflow diagram showing:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>11-step workflow visualization (ASCII diagram)</li>
                  <li>Node types and configuration summary</li>
                  <li>Data transformation formats</li>
                  <li>Execution flow and timing</li>
                  <li>Error handling strategy</li>
                  <li>Optional email outreach workflow</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">2. TECHNICAL_NOTE.md (2 pages)</h4>
                <p className="text-gray-700 mb-2">Technical documentation covering:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Data Sources & Scraping:</strong> Eventbrite API, 10Times, Association Calendars, Competitor Pages, Trade Show Directories</li>
                  <li><strong>Scraping Strategy:</strong> Compliance measures, anti-blocking techniques, blocked source handling</li>
                  <li><strong>Deduplication Method:</strong> URL matching (primary), Name+Date matching (secondary), fuzzy matching (future)</li>
                  <li><strong>Scoring Logic & Formulas:</strong> Complete calculation details for all 6 sub-scores with examples</li>
                  <li><strong>Limitations & Constraints:</strong> Data availability, scraping challenges, scoring accuracy</li>
                  <li><strong>Next Steps & Enhancements:</strong> Phase 1-3 improvements roadmap</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">3. AIRTABLE_SCHEMA.md</h4>
                <p className="text-gray-700 mb-2">Complete database schema documentation:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Events Table:</strong> 25+ fields including scores, enrichment data, outreach status</li>
                  <li><strong>Competitors Table:</strong> List structure with keywords</li>
                  <li><strong>Config_Scoring Table:</strong> Weight configuration and thresholds</li>
                  <li><strong>Runs Table:</strong> Execution log structure</li>
                  <li><strong>Relationships:</strong> Lookups and formulas</li>
                  <li><strong>Setup Instructions:</strong> Step-by-step Airtable base creation</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">4. README.md</h4>
                <p className="text-gray-700 mb-2">Complete setup and usage guide:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Quick start instructions</li>
                  <li>Installation steps</li>
                  <li>Environment variables configuration</li>
                  <li>Workflow structure explanation</li>
                  <li>Scoring weights configuration</li>
                  <li>Troubleshooting guide</li>
                  <li>Email outreach setup (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 1}
        onClose={() => setOpenModal(null)}
        title="N8N Workflow - Complete Details"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">⚙️ N8N Workflow Deliverables</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">n8n-workflow.json</h4>
                <p className="text-gray-700 mb-3">Ready-to-import workflow file with:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-3">
                  <li>11 connected nodes representing complete workflow</li>
                  <li>Weekly CRON trigger configuration</li>
                  <li>Airtable integration nodes</li>
                  <li>HTTP Request nodes for event discovery</li>
                  <li>Code nodes for normalization, deduplication, scoring</li>
                  <li>Error handling throughout</li>
                </ul>
                <p className="text-sm text-gray-600 italic">File location: Root directory / n8n-workflow.json</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Workflow Nodes Included:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Schedule Trigger</div>
                  <div>• Airtable Nodes (5+)</div>
                  <div>• HTTP Request Nodes</div>
                  <div>• Code Nodes (custom logic)</div>
                  <div>• Merge Node</div>
                  <div>• IF Node (conditional)</div>
                  <div>• Set Node (data transform)</div>
                  <div>• Error Handling</div>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li><strong>Parallel Execution:</strong> Multiple event sources searched simultaneously</li>
                  <li><strong>Deduplication Logic:</strong> URL and name+date matching</li>
                  <li><strong>Scoring Calculation:</strong> Complete 6-factor scoring with configurable weights</li>
                  <li><strong>Database Operations:</strong> Create/update events in Airtable</li>
                  <li><strong>Run Logging:</strong> Track execution status and statistics</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-gray-900 mb-2">Setup Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Airtable API credentials (Personal Access Token)</li>
                  <li>Airtable Base ID</li>
                  <li>Event source API keys (Eventbrite, etc.)</li>
                  <li>Environment variables configured in N8N</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 2}
        onClose={() => setOpenModal(null)}
        title="Database Schema - Complete Details"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">🗄️ Airtable Database Schema</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Events Table (Main Table)</h4>
                <p className="text-gray-700 mb-2 text-sm">25+ fields including:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                  <div>• event_name</div>
                  <div>• event_url</div>
                  <div>• start_date, end_date</div>
                  <div>• city, country, organiser</div>
                  <div>• event_type, topics</div>
                  <div>• exhibitor_url, agenda_url</div>
                  <div>• attendance_claimed</div>
                  <div>• attendance_last_year</div>
                  <div>• competitors_present</div>
                  <div>• icp_roles, sectors</div>
                  <div>• speaking_opportunity</div>
                  <div>• cfp_deadline</div>
                  <div>• price_stand_est</div>
                  <div>• score_overall</div>
                  <div>• score_icp, score_competitors</div>
                  <div>• score_audience, score_speaking</div>
                  <div>• score_commercials, score_timing</div>
                  <div>• score_confidence</div>
                  <div>• data_sources</div>
                  <div>• last_updated</div>
                  <div>• change_log</div>
                  <div>• outreach_status</div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Competitors Table</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>competitor_name - Company name</li>
                  <li>website - Company URL</li>
                  <li>keywords - Match keywords (multi-select)</li>
                  <li>notes - Additional notes</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">Minimum 10 competitors required</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Config_Scoring Table</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>weight_icp (default: 0.30)</li>
                  <li>weight_competitors (default: 0.20)</li>
                  <li>weight_audience (default: 0.20)</li>
                  <li>weight_speaking (default: 0.15)</li>
                  <li>weight_commercials (default: 0.10)</li>
                  <li>weight_timing (default: 0.05)</li>
                  <li>min_score_threshold</li>
                  <li>high_score_threshold</li>
                  <li>manual_sources (for blocked sources)</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">All weights must sum to 1.0</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Runs Table</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>run_id - Auto number</li>
                  <li>status - running/completed/failed</li>
                  <li>start_time, end_time</li>
                  <li>trigger - weekly_automation/manual</li>
                  <li>events_found, events_new, events_updated</li>
                  <li>errors - Error messages (if any)</li>
                  <li>dashboard_url</li>
                  <li>execution_time_seconds (formula)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Views Included:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Top Events by Score</li>
                  <li>New Events</li>
                  <li>Updated Events</li>
                  <li>Upcoming Events</li>
                  <li>High Confidence</li>
                  <li>Speaking Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={openModal === 3}
        onClose={() => setOpenModal(null)}
        title="Automation Features - Complete Details"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ Automation Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Weekly Scheduled Runs</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>CRON trigger: Every Monday at 9:00 AM (configurable)</li>
                  <li>Automated execution without manual intervention</li>
                  <li>Run log tracking for each execution</li>
                  <li>Error recovery and retry logic</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Multi-Source Discovery</h4>
                <p className="text-gray-700 mb-2 text-sm">Parallel execution from 5+ sources:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li><strong>Eventbrite API:</strong> REST API with keyword search</li>
                  <li><strong>10Times:</strong> Web scraping (respecting robots.txt)</li>
                  <li><strong>Association Calendars:</strong> Industry body websites</li>
                  <li><strong>Competitor Pages:</strong> Scheduled monitoring</li>
                  <li><strong>Trade Show Directories:</strong> Exhibition websites</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Automated Scoring</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>6-factor scoring calculation</li>
                  <li>Configurable weights from Airtable</li>
                  <li>Missing data handling (defaults to neutral)</li>
                  <li>Confidence level assignment</li>
                  <li>Overall score calculation (weighted sum)</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Dashboard Generation</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Top 10 events by Overall Score</li>
                  <li>Sub-score breakdown visualization</li>
                  <li>Change log (NEW/UPDATED events)</li>
                  <li>Key dates and deadlines</li>
                  <li>Source links (agenda, exhibitor lists)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-2">Error Handling</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  <li>Source failures: Continue with other sources, log error</li>
                  <li>API rate limits: Exponential backoff retry</li>
                  <li>Scraping blocked: Fall back to manual source links</li>
                  <li>Missing data: Default to neutral scores, flag confidence</li>
                  <li>Critical failures: Log to Runs table, optional notification</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-2">Execution Time</h4>
                <p className="text-gray-700 text-sm">
                  Typical execution: <strong>20-30 minutes</strong> per weekly run
                  <br />
                  (depending on event volume and API response times)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Technology Stack */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Orchestration</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• N8N Workflow Automation</li>
              <li>• Scheduled CRON triggers</li>
              <li>• Error handling & logging</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Database</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Airtable (cloud-based)</li>
              <li>• Structured schema</li>
              <li>• API integration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Data Sources</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Eventbrite API</li>
              <li>• 10Times scraping</li>
              <li>• Competitor monitoring</li>
              <li>• Association calendars</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Scoring Model */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Scoring Model</h2>
        <p className="text-gray-700 mb-4">
          Transparent, 6-factor scoring system with configurable weights:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="font-semibold text-gray-900">ICP Fit (30%)</div>
            <div className="text-sm text-gray-600">Job roles, sectors, topics</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Competitor Density (20%)</div>
            <div className="text-sm text-gray-600">Competitor presence</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Audience Scale (20%)</div>
            <div className="text-sm text-gray-600">Size & seniority</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Speaking Opportunity (15%)</div>
            <div className="text-sm text-gray-600">CFP & speaking slots</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Commercial Practicality (10%)</div>
            <div className="text-sm text-gray-600">Cost vs. value</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Timing & Logistics (5%)</div>
            <div className="text-sm text-gray-600">Lead time & dates</div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary-600">1.</span>
            <div>
              <strong>Set Up Airtable Base</strong> - Create tables per provided schema
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary-600">2.</span>
            <div>
              <strong>Configure N8N</strong> - Import workflow, set credentials
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary-600">3.</span>
            <div>
              <strong>Populate Initial Data</strong> - Add competitors, configure weights
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary-600">4.</span>
            <div>
              <strong>Test Workflow</strong> - Run manually, verify outputs
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-semibold text-primary-600">5.</span>
            <div>
              <strong>Enable Automation</strong> - Schedule weekly CRON trigger
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Explore the Demo</h2>
        <p className="text-primary-100 mb-6">
          Navigate through the interactive workflow, scoring system, and dashboard 
          to see the complete solution in action.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/workflow" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-flex items-center gap-2">
            View Workflow
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/scoring" className="btn-secondary bg-white/20 text-white hover:bg-white/30 inline-flex items-center gap-2">
            Try Scoring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

