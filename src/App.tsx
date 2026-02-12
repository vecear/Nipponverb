import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { NavProvider } from './contexts/NavContext'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import Practice from './pages/Practice'
import Simulation from './pages/Simulation'
import Stages from './pages/Stages'
import VerbList from './pages/VerbList'
import VerbConjugationGuide from './pages/VerbConjugationGuide'
import Profile from './pages/Profile'
import DataManagement from './pages/DataManagement'
import GrammarList from './pages/GrammarList'
import GrammarDetail from './pages/GrammarDetail'
import JobSelection from './pages/JobSelection'
import Admin from './pages/Admin'
import VocabularyLevelSelection from './pages/VocabularyLevelSelection'
import { VocabularyList } from './pages/vocabulary'
import DatesAndCounters from './pages/DatesAndCounters'
import ProtectedRoute from './components/ProtectedRoute'

import AdminRoute from './components/AdminRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/practice/:category" element={<Practice />} />
              <Route path="/grammar" element={<GrammarList />} />
              <Route path="/grammar/:id" element={<GrammarDetail />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/stages" element={<Stages />} />
              <Route path="/verbs" element={<VerbList />} />
              <Route path="/verb-guide" element={<VerbConjugationGuide />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/data-management" element={<DataManagement />} />
              <Route path="/job-selection" element={<JobSelection />} />
              <Route path="/vocabulary" element={<VocabularyLevelSelection />} />
              <Route path="/vocabulary/:level" element={<VocabularyList />} />
              <Route path="/date-counters" element={<DatesAndCounters />} />
            </Route>
            {/* 管理員路由 */}
            <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
          </Routes>
        </NavProvider>
      </Router>
    </AuthProvider>
  )
}

export default App
