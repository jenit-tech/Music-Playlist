import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {MusicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = MusicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="musiclist-item">
      <div className="track-container">
        <img className="track-image" src={imageUrl} alt="track" />
        <div className="track-name-container">
          <p className="track-name">{name}</p>
          <p className="track-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}

export default MusicItem
