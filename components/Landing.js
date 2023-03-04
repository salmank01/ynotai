import { Space, Typography, Carousel, Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const { Title } = Typography;
  return (
    <>
      <Carousel effect="fade" autoplay>
        <div>
          <Image
            src="/../public/images/AI.webp"
            width={1720}
            height={820}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/../public/images/Ai3.webp"
            width={1720}
            height={820}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/../public/images/Ai4.webp"
            width={1720}
            height={820}
            alt="AI"
            priority={true}
          />
        </div>
        <div>
          <Image
            src="/../public/images/Ai5.webp"
            width={1720}
            height={820}
            alt="AI"
            priority={true}
          />
        </div>
      </Carousel>

      <Space
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "absolute",
          top: "20rem",
        }}
      >
        <Title style={{ fontSize: "5rem", color: "white" }}>
          Get your work done <br></br> <span>Professionally</span>
        </Title>
        <Button
          type="primary"
          style={{
            height: "5rem",
            width: "12rem",
            fontSize: "1.4rem",
            fontWeight: "700",
            letterSpacing: "1.2px",
          }}
        >
          <Link href="/">Learn more</Link>
        </Button>
      </Space>
    </>
  );
}
