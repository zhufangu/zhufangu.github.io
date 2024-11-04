export default function DrumKit() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <iframe
          src="https://zhufangu.github.io/drumkit/" // replace with the actual URL
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Online Drum Kit"
          allow="autoplay" // if sound is enabled on the site
        />
      </div>
    );
  }
  