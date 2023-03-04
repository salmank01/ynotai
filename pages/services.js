import Layout from "../components/Layout";
import useWindowSize from "../components/windowSize";
import { Space, Col, Row, Card, Typography } from "antd";
import { colors } from "../public/utilities";
import Image from "next/image";

export default function Service() {
  const { width } = useWindowSize();
  const { Meta } = Card;
  const { Title } = Typography;
  return (
    <Layout>
      <Space
        style={{
          padding: width > 1350 ? "3rem 278px" : "3rem 12rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: colors.Light,
        }}
      >
        <Title
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            textAlign: "center",
            padding: "2rem 0",
          }}
        >
          Our Services
        </Title>
        <Row
          style={{
            display: "flex",
            width: width > 1200 ? "73rem" : "53rem",
            gap: "4rem 0",
          }}
          className="portfolio-projects"
        >
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={350}
                  height={320}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={350}
                  height={320}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={350}
                  height={320}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={350}
                  height={320}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={350}
                  height={320}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
          <Col
            span={width > 1200 ? 8 : 12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              hoverable
              style={{ width: 350 }}
              cover={
                <Image
                  alt="project"
                  src="/../public/images/AI.webp"
                  width={350}
                  height={320}
                />
              }
            >
              <Meta
                title="Special Service"
                description="Service description goes here"
              />
            </Card>
          </Col>
        </Row>
      </Space>
    </Layout>
  );
}
