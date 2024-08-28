import { Route,Routes } from "react-router-dom"
import { FloatingShap } from "./Component/FloatingShap"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import EmailVerificationPage from './pages/EmailVerificationPage'
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
const App=()=> {
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900
      flex items-center justify-center relative overflow-hidden">
      <FloatingShap color="bg-green-500" size="w-64 h-64" left="10%" top="-5%" delay={0}/>
      <FloatingShap color="bg-emerald-500" size="w-48 h-48" left="80%" top="70%" delay={5}/>
      <FloatingShap color="bg-lime-500" size="w-32 h-32" left="-10%" top="40%" delay={2}/>
      <Routes>
        <Route path="/" element={'Home'}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/verify-email" element={<EmailVerificationPage/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
