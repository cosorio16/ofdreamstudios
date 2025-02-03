function Message({ sizes }) {
  return (
    <svg width={sizes} height={sizes} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"
      />
    </svg>
  );
}

export default Message;
