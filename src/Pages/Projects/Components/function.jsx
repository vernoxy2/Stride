import { useEffect, useRef } from "react";

export default function AutoScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1; // speed of scrolling
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0; // reset scroll
        }
        scrollContainer.scrollTop = scrollAmount;
      }
      requestAnimationFrame(scrollStep);
    };

    scrollStep();
  }, []);

  return (
    <div className="overflow-hidden h-48 border border-gray-300 relative">
      <div ref={scrollRef} className="space-y-4">
        {[
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 4",
          "Item 5",
          "Item 6",
          "Item 7",
        ].concat([
          "Item 1",
          "Item 2",
          "Item 3",
          "Item 4",
          "Item 5",
          "Item 6",
          "Item 7",
        ]) // duplicate for seamless scroll
          .map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 border rounded text-center"
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}
