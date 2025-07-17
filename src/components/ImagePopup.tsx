import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  const [zoom, setZoom] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);
  const handleReset = () => {
    setZoom(1);
    setRotation(0);
  };

  // Reset zoom and rotation when popup closes
  React.useEffect(() => {
    if (!isOpen) {
      setZoom(1);
      setRotation(0);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
        <div className="relative w-full h-full flex flex-col">
          {/* Controls */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleZoomOut}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleZoomIn}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleRotate}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <RotateCw className="w-4 h-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReset}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              Reset
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center p-4 overflow-hidden">
            <div className="relative max-w-full max-h-full">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out cursor-move"
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg)`,
                  transformOrigin: 'center center'
                }}
                draggable={false}
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-white text-sm font-medium">{imageAlt}</p>
            <p className="text-white/70 text-xs">
              Zoom: {Math.round(zoom * 100)}% | Rotation: {rotation}°
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePopup;