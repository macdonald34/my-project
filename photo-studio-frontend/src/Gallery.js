import React from 'react';
import './Gallery.css';

const images = [
  { id: 1, src: 'https://via.placeholder.com/600x400', alt: 'Image 1' },
  { id: 2, src: 'https://via.placeholder.com/600x400', alt: 'Image 2' },
  { id: 3, src: 'https://via.placeholder.com/600x400', alt: 'Image 3' },
  { id: 4, src: 'https://via.placeholder.com/600x400', alt: 'Image 4' },
  { id: 5, src: 'https://via.placeholder.com/600x400', alt: 'Image 5' },
  { id: 6, src: 'https://via.placeholder.com/600x400', alt: 'Image 6' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => handleImageClick(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={handleCloseClick}>
          <span className="close">&times;</span>
          <img className="lightbox-content" src={selectedImage.src} alt={selectedImage.alt} />
          <div className="caption">{selectedImage.alt}</div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
