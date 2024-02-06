import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
//get listing from search in the listing item as the input
//we want to go page of the listing when we click on the card
//we want to have a link that covers the whole card
export default function ListingItem({listing}) {
  return(
          //everything inside this link
    <div className='bg-white shadow-md hover:shadow-lg 
    transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
        <Link to={`/listing/${listing._id}`}>
          <img
            src={listing.imageUrls[0]}
            alt='listing cover'
            className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
          />
      </Link>
    </div>
  )
}