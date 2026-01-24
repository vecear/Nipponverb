import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
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
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/:category" element={<Practice />} />
            <Route path="/grammar" element={<GrammarList />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/verbs" element={<VerbList />} />
            <Route path="/verb-guide" element={<VerbConjugationGuide />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/data-management" element={<DataManagement />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
