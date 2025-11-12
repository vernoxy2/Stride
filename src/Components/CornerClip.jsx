// CornerClip.js
export const CornerClip = ({ positions, className = '' }) => {
  return (
    <>
      {positions.map((pos, idx) => (
        <div
          key={idx}
          className={`absolute w-[24px] h-[24px] bg-bg rotate-180 ${className}`}
          style={{
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom,
            left: pos.left,
            clipPath: 'path("M0 0Q0,24 24,24 L 0 24 Z")',
          }}
        />
      ))}
    </>
  );
};
