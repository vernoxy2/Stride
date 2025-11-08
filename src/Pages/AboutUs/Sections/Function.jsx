import React, { useRef } from "react";
import { motion } from "framer-motion";

// Example images (replace these URLs with your own)
const images = [
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1018/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1024/400/300",
  "https://picsum.photos/id/1025/400/300",
  "https://picsum.photos/id/1015/400/300",
  "https://picsum.photos/id/1016/400/300",
  "https://picsum.photos/id/1018/400/300",
  "https://picsum.photos/id/1020/400/300",
  "https://picsum.photos/id/1024/400/300",
  "https://picsum.photos/id/1025/400/300",
];

const HorizontalImageGallery = () => {
  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    const container = scrollRef.current;
    if (!container) return;

    e.preventDefault(); // Prevent vertical scroll
    container.scrollBy({
      left: e.deltaY,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-8 h-[100vh] flex items-center justify-center">
      {/* <h2 className="text-2xl font-bold mb-6">Interactive Horizontal Gallery</h2> */}
      <motion.div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex overflow-hidden space-x-4 cursor-grab scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-80 h-60 rounded-lg overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1} // Subtle resistance
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover "
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalImageGallery;
