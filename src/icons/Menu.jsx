function Menu({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="M88 152h336M88 256h336M88 360h336"
      />
    </svg>
  );
}

export default Menu;
