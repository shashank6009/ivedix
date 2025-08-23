import React from 'react';

interface PlaceholderImageProps {
  text: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ text, className = '' }) => {
  return (
    <div 
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-400/20 via-yellow-400/20 to-green-400/20 border-2 border-dashed border-orange-400/30 rounded-lg ${className}`}
      style={{ minHeight: '120px' }}
    >
      <div className="text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <div className="text-sm text-orange-400 font-medium">{text}</div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
