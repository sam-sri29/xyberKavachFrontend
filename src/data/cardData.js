import { IoIosWarning } from "react-icons/io";
import { FaShieldAlt , FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


const cardData=[
    {   "id":1,
        "title":"Active Threats",
        "icon":IoIosWarning,
        "iconClass":"text-yellow-500 text-4xl bg-red-900 p-1 rounded-lg",
        "desc":"3",
        "description":"↑ 2 from yesterday",
        "descriptionClass":"text-red-600 text-sm"
    },
    {
        "id":2,
        "title":"Blocked Attacks",
        "icon":FaShieldAlt,
        "iconClass":"text-blue-300 text-4xl bg-blue-900 p-2 rounded-lg",
        "desc":"247",
        "description":"↑ 15% this week",
        "descriptionClass":"text-green-600 text-sm"
    },
    {
        "id":3,
        "title":"Vulnerabilities",
        "icon":FaSearch,
        "iconClass":"text-white text-4xl bg-gray-900 p-2 rounded-lg",
        "desc":"12",
        "description":"4 critical, 8 medium",
       "descriptionClass":"text-yellow-400 text-sm"
    },
    {
        "id":4,
        "title":"System Health",
        "icon":FaHeart,
        "iconClass":"text-green-500 text-4xl bg-green-900 p-2 rounded-lg",
        "desc":"98%",
        "description":"Optimal performance",
        "descriptionClass":"text-green-600 text-sm"
        
    }
]

export default cardData;