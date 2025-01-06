import Image from "next/image";

const Logo = () => {
  return (
    <div style={{ width: "auto", height: "auto" }}>
      <Image height={130} width={130} alt="Logo" src="/logo.svg" />
    </div>
  );
};

export default Logo;
