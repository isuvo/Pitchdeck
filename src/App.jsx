import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Building, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Target,
  Shield,
  FileText,
  ChevronRight,
  Mail,
  MapPin
} from 'lucide-react';

// Chart image URLs (using built asset paths with base path for GitHub Pages)
const jobCreationChart = '/Pitchdeck/assets/job_creation_chart-DRaM-NcT.png';
const investmentChart = '/Pitchdeck/assets/investment_allocation_chart-CZPsl6RC.png';
const revenueChart = '/Pitchdeck/assets/revenue_projections_chart-CZcIS-3Q.png';
const riskManagementChart = '/Pitchdeck/assets/risk_management_chart-CvICc84z.png';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="grid md:grid-cols-6">
        <div />
        <div className="md:col-span-4">
          {/* Header */}
          <motion.header 
            className="bg-white shadow-lg rounded-lg px-4 py-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Foreign Graduate Entrepreneur Stream
              </h1>
              <p className="text-lg text-gray-600">
                Alberta Advantage Immigration Program Application
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-sm">
                Foreign Graduate, PhD
              </Badge>
              <Badge variant="secondary" className="text-sm">
                15+ Years Experience
              </Badge>
            </div>
          </div>
      </motion.header>

      {/* Main Content */}
      <main className="px-4 py-8">
        {/* Candidate Profile Section */}
        <motion.section 
          className="mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <Card className="mb-8 overflow-hidden">
              <CardHeader className="bg-white text-gray-900 shadow-sm">
                <div className="flex items-center space-x-3">
                  <User className="h-8 w-8" />
                  <div>
                    <CardTitle className="text-2xl text-gray-900">Md Imran Hossain</CardTitle>
                    <CardDescription className="text-gray-600">
                      <div className="flex items-center space-x-2 mt-2">
                        <Mail className="h-4 w-4" />
                        <span>mihcou@gmail.com</span>
                      </div>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Education Excellence</h3>
                        <p className="text-sm text-gray-600">PhD UNSW Canberra, Australia</p>
                        <p className="text-sm text-gray-600">MSc Sweden</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="h-6 w-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Professional Experience</h3>
                        
                        <p className="text-sm text-gray-600">15+ years teaching, training and consultancy</p>
                        <p className="text-sm text-gray-600"><b>Current:</b> Head of engineering</p>
                        <p className="text-sm text-gray-600">Casual academic at ANU, UNSW, Crown Institute</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building className="h-6 w-6 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Ownership</h3>
                        <p className="text-sm text-gray-600">100% sole-proprietorship</p>
                        <p className="text-sm text-gray-600">CAD ±100k personal assets</p>
                        <p className="text-sm text-gray-600">No third-party equity</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-3">Alberta Connections & Global Networking</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">U of A & NAIT collaborators, TEC Edmonton mentor</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Strong professional links in Bangladesh IT sector and active research/industry collaborations across Australia, Europe, and the U.S.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Business</TabsTrigger>
            <TabsTrigger value="business">Plan</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span>Technology Studio Concept</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900">Custom Software</h4>
                        <p className="text-sm text-blue-700">Turnkey digital solutions and staff augmentation services</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900">Cybersecurity & Blockchain</h4>
                        <p className="text-sm text-green-700">Advanced security solutions and distributed ledger applications</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900">Data Analytics & AI</h4>
                        <p className="text-sm text-purple-700">Business intelligence and machine learning implementations</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-900">IoT Middleware</h4>
                        <p className="text-sm text-orange-700">Drone technology and Internet of Things integration</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium text-gray-800">
                        <strong>Competitive Edge:</strong> R&D depth combined with teaching expertise enables rapid knowledge transfer to local Alberta hires
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span>Market Opportunity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">$2B</div>
                        <p className="text-sm text-gray-600">Alberta TAM Available Today</p>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">200</div>
                        <p className="text-sm text-gray-600">Target SMEs</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Target Sectors:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Agri-tech</Badge>
                          <Badge variant="outline">Logistics</Badge>
                          <Badge variant="outline">Health</Badge>
                          <Badge variant="outline">Energy</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Business Tab */}
          <TabsContent value="business">
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Engagements Year 1</CardTitle>
                    <CardDescription>Plan to acquire 20 projects in the first year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center items-center h-48 bg-blue-50 rounded-lg shadow-md">
                      <p className="text-6xl font-bold text-blue-600">{'>='} 20</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Job Creation Strategy</CardTitle>
                    <CardDescription>Planned hiring timeline and positions for 5 roles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-6">
                      <img 
                        src={jobCreationChart} 
                        alt="Job Creation Strategy Chart" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900">Year 1 - Q1</h4>
                        <ul className="text-sm text-blue-700 mt-2 space-y-1">
                          <li>• Business Development Executive (1 Full-time)</li>
                          <li>• Junior Technical Engineer (1 Full-time)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900">Year 1 - Q2</h4>
                        <ul className="text-sm text-green-700 mt-2 space-y-1">
                          <li>• Cybersecurity Analyst (1)</li>
                          <li>• Software Engineer (2)</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900">Years 2-3</h4>
                        <ul className="text-sm text-purple-700 mt-2 space-y-1">
                          <li>• Project Coordinator</li>
                          <li>• Marketing Coordinator</li>
                          <li>• Consultants or Advisors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials">
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Allocation</CardTitle>
                    <CardDescription>Total Investment: CAD 100,000</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center">
                      <img 
                        src={investmentChart} 
                        alt="Investment Allocation Chart" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Projections</CardTitle>
                    <CardDescription>3-year revenue projections and profit margins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-6">
                      <img 
                        src={revenueChart} 
                        alt="Revenue Projections Chart" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">CAD 200k</div>
                        <p className="text-sm text-gray-600">Year 1 Revenue</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">CAD 450k</div>
                        <p className="text-sm text-gray-600">Year 2 Revenue</p>
                        <p className="text-xs text-green-700">20% Profit Margin</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">CAD 700k</div>
                        <p className="text-sm text-gray-600">Year 3 Revenue</p>
                        <p className="text-xs text-purple-700">25% Profit Margin</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Ownership Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold">Planned Legal Structure</h4>
                        <p className="text-sm text-gray-600 mt-1">Alberta-registered sole-proprietorship with 100% founder ownership</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900">Funding Readiness</h4>
                        <ul className="text-sm text-green-700 mt-1 space-y-1">
                          <li>• CAD ±100k cash</li>
                          <li>• Possibility of supplementing through line-of-credit from Canadian bank</li>
                          <li>• Complete legal and beneficial interest held by founder</li>
                          <li>• No external investors or partners</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Operations Tab */}
          <TabsContent value="operations">
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-red-600" />
                      <span>Risk Management</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-6">
                      <img 
                        src={riskManagementChart} 
                        alt="Risk Management Steps" 
                        className="max-w-full h-auto rounded-lg shadow-md"
                        style={{ maxWidth: '400px' }}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-semibold text-red-900">FX Risk</h4>
                          <p className="text-sm text-red-700">Currency hedging strategies</p>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg">
                          <h4 className="font-semibold text-yellow-900">Regulatory</h4>
                          <p className="text-sm text-yellow-700">Legal firm partnership</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-blue-900">Concentration</h4>
                          <p className="text-sm text-blue-700">15% client cap, diversification</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                          <h4 className="font-semibold text-green-900">Operational Risk</h4>
                          <p className="text-sm text-green-700">Redundancy and local partnerships</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support">
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Required Support and Regulatory Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900">Setup and Validation</h4>
                        <p className="text-sm text-blue-700 mt-2">Complete process including from EOI to letter of recommendation</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900">Edmonton Business License</h4>
                        <p className="text-sm text-green-700 mt-2">Guidance to navigate business registration</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900">Investment Readiness</h4>
                        <p className="text-sm text-purple-700 mt-2">Advice on capital deployment</p>
                      </div>
                    </div>
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-900">Integration</h4>
                        <p className="text-sm text-orange-700 mt-2">Local integration and familiarization</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h4 className="font-semibold text-indigo-900">Immigration and PR Pathway</h4>
                        <p className="text-sm text-indigo-700 mt-2">Transition from FGES work permit to Permanent Residency</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-gray-600" />
                      <span>Available Supporting Documentation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                          <div>
                            <h4 className="font-semibold">Business Structure</h4>
                            <p className="text-sm text-gray-600">Organizational chart and employee hierarchy</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                          <div>
                            <h4 className="font-semibold">Human Resources</h4>
                            <p className="text-sm text-gray-600">Hiring plan, schedule, and detailed job descriptions</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                          <div>
                            <h4 className="font-semibold">Financial Planning</h4>
                            <p className="text-sm text-gray-600">36-month projections and capital investment breakdown</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                          <div>
                            <h4 className="font-semibold">Professional Credentials</h4>
                            <p className="text-sm text-gray-600">Complete CV and professional resume</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                          <div>
                            <h4 className="font-semibold">References</h4>
                            <p className="text-sm text-gray-600">Letters of reference from industry professionals</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                          <div>
                            <h4 className="font-semibold">Financial Verification</h4>
                            <p className="text-sm text-gray-600">Bank letters and verified proof of funds</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                      <p className="text-sm font-medium text-blue-900">
                        All documentation prepared and ready for immigration program assessment
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-4 mt-12 rounded-lg px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-gray-400">
          Foreign Graduate Entrepreneur Stream Application - Alberta Advantage Immigration Program
        </p>
        <p className="text-sm text-gray-500 mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.footer>
        </div>
        <div />
      </div>
    </div>
  );
}

export default App;
