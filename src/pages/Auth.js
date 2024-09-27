import { Login } from "../components/Login"
import { Navbar } from "../components/Navbar"

export const Auth = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center pt-20">
    <Login />
    </div>
    </>
  )
}