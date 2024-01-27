import { useEffect, useState } from 'react'
//get the landlord information
export default function Contact({listing}) {
    const [landlord, setLandlord] = useState(null)
    useEffect(() => {
        const fetchLandlord = async () => {
            try {
                const res = await fetch(`/api/${listing.userRef}`)
                const data = await res.json()
                setLandlord(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchLandlord()

    },[listing.userRef])
  return (
    {landlord && (

        
    )
    
    }
  )
}
