import React from 'react';

interface ImageZoomProps {
  image: string;
}

const ImageZoom: React.FC<ImageZoomProps> = ({ image }) => {
  return <img className="" src={image} alt="" />;
};
export default ImageZoom;
