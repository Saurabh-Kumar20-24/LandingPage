export default function Wave({
  position = "bottom",
  color = "#fff",
  height = 160,
  flip = false
}) {
  return (
    <div
      className={`
        absolute left-0 w-full overflow-hidden leading-none z-0
        ${position === "top" ? "top-0" : "bottom-0"}
        ${flip ? "rotate-180" : ""}
      `}
    >
      <svg
        viewBox="0 0 1440 200"
        className="w-full"
        style={{ height }}
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,200L0,200Z"
        />
      </svg>
    </div>
  );
}