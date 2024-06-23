import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomLayout from '../components/Layout';
import { Card, Table, Button, Carousel, Row, Col } from 'antd';
import ContactFormModal from '../components/ContactFormModal';
import listings from '../data/listingsData';

const DetailedListing = () => {
  const { slug } = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const listing = listings.find(listing => listing.slug === slug);

  if (!listing) {
    return (
      <CustomLayout>
        <h1>Listing not found</h1>
      </CustomLayout>
    );
  }

  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <CustomLayout>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title={listing.title}>
            <Carousel autoplay>
              {listing.images && listing.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                </div>
              ))}
            </Carousel>
            <Card style={{ marginTop: '16px' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Card title="Property Details">
                    <p>{listing.address}</p>
                    <p>{listing.price}</p>
                    <p>{`${listing.beds} beds, ${listing.baths} baths, ${listing.sqft} sq ft`}</p>
                    <p>{`Neighborhood: ${listing.neighborhood}`}</p>
                    <p>{`Year Built: ${listing.yearBuilt}`}</p>
                    <p>{`Area: ${listing.area}`}</p>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card title="Agent Info">
                    <p>{listing.agent?.name}</p>
                    <p>{listing.agent?.number}</p>
                    <Button type="primary" onClick={showModal} style={{ width: '100%' }}>Contact Agent</Button>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Features">
            <h3>Exterior Features</h3>
            <Table columns={columns} dataSource={listing.exteriorFeatures} pagination={false} />
            <h3>Interior Features</h3>
            <Table columns={columns} dataSource={listing.interiorFeatures} pagination={false} />
            <h3>Property Features</h3>
            <Table columns={columns} dataSource={listing.propertyFeatures} pagination={false} />
          </Card>
        </Col>
      </Row>
      <ContactFormModal visible={isModalVisible} onClose={handleClose} />
    </CustomLayout>
  );
};

export default DetailedListing;
