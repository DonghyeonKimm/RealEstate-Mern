import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
//get listing from search in the listing item as the input
export default function ListingItem({ listing }) {
  return(
    <div className='bg-white flex flex-col gap-4'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.name}
          </p>
    </div>
    </Link>
    </div>
  )
}