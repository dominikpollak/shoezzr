import React from 'react';

interface ImageZoomProps {
  image: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ image }) => {
  return <img src={image} alt="" />;
};
export default ImageZoom;
