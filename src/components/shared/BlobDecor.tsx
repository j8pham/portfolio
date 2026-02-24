export function BlobDecor() {
  return (
    <>
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[100px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[100px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)",
        }}
      />
    </>
  );
}
