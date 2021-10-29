import { useContext } from "react"
import { AuthContext } from "../pages/AuthProvider/AuthProvider"

const useAuht = () => {
  return useContext(AuthContext)
}
export default useAuht