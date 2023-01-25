import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import  { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
 const dispatch = useDispatch();
 const { songid } = useParams();
 const { ActiveSong, isPlaying } = useSelector((state) => state.player);
 const { data: songData, isFetching: isFetchingSongDetails } =
 useGetSongDetailsQuery({songid})
 console.log(songid);

return (

<div className='flex flex-col'>

   {/* <DetailsHeader artistId={artistId} songData={songData} /> */}
    SongDetails
<div className='mb-10'>
    <h2 className='text-white text-3xl font-bold'>Lyrics</h2>
    <div className='mt-5'>


    </div>
    
    </div>    


    </div>

)

};
export default SongDetails;
