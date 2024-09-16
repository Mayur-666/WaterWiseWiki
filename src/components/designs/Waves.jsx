function Waves() {
  return (
    <div className="absolute bottom-0 w-full overflow-hidden">
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 -10 100 60"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="00"
          fill="rgba(0,172,193,0.4)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(0,172,193,0.3)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(0,172,193,0.5)"
        />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,172,193,0.2)" />
      </g>
    </svg>
  </div>
  )
}

export default Waves