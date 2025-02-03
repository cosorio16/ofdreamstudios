function Spheres({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 7A5 5 0 1 0 2 7a5 5 0 0 0 10 0" />
      <path
        fill="currentColor"
        d="M12 17a5 5 0 1 0-10 0a5 5 0 0 0 10 0M22 7a5 5 0 1 0-10 0a5 5 0 0 0 10 0"
      />
      <path fill="currentColor" d="M22 17a5 5 0 1 0-10 0a5 5 0 0 0 10 0" />
    </svg>
  );
}

export default Spheres;
