import React, { useState } from 'react';
import ImagePopup from './ImagePopup';
import { Expand } from 'lucide-react';

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  showExpandIcon?: boolean;
}

const ClickableImage: React.FC<ClickableImageProps> = ({ 
  src, 
  alt, 
  className = "",
  showExpandIcon = true 
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div 
        className={`relative group cursor-pointer ${className}`}
        onClick={() => setIsPopupOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105`}
        />
        {showExpandIcon && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Expand className="w-5 h-5 text-white" />
            </div>
          </div>
        )}
      </div>
      
      <ImagePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        imageSrc={src}
        imageAlt={alt}
      />
    </>
  );
};

export default ClickableImage;