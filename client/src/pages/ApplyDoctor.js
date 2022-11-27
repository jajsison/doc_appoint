import { Col, Form, Input, Row } from "antd";
import React from "react";
import Layout from "../components/Layout";

function ApplyDoctor() {
  return (
    <Layout>
      <h1 className="page-title">Apply Doctor</h1>
      <Form layout="vertical">
        <h1 className="card-title mt-3">Personal Information</h1>
        <hr />
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Address" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true }]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Website"
              name="website"
              rules={[{ required: true }]}
            >
              <Input placeholder="Website" />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              rules={[{ required: true }]}
            >
              <Input placeholder="Specialization" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              rules={[{ required: true }]}
            >
              <Input placeholder="Experience" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Fee Per Consultation"
              name="feePerConsultation"
              rules={[{ required: true }]}
            >
              <Input placeholder="Fee Per Consultation" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item
              label="Consultation Hours"
              name="consultationHours"
              rules={[{ required: true }]}
            >
              <Input placeholder="Consultation Hours" />
            </Form.Item>
          </Col>

        </Row>
      </Form>
    </Layout>
  );
}

export default ApplyDoctor;
