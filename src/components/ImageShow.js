function ImageShow({ image }) {
  return (
    <div style={{ maxWidth: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>

  );
}

export default ImageShow;

