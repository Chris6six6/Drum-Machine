import PropTypes from 'prop-types';

function Pad({ audioClip }) {
  const playSound = () => {
    const audio = document.getElementById(audioClip.keyTrigger);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(error => console.error(error));
      displayClipDescription(audioClip.description);
    }
  };

  const displayClipDescription = (description) => {
    const displayElement = document.getElementById('display');
    if (displayElement) {
      displayElement.innerText = description;
    }
  };

  return (
    <button className="drum-pad" id={`drum-${audioClip.keyTrigger}`} onClick={playSound}>
      <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip" />
      {audioClip.keyTrigger}
    </button>
  );
}

Pad.propTypes = {
  audioClip: PropTypes.shape({
    keyTrigger: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Pad;
