import React, { useState } from 'react';
import CustomLayout from '../components/Layout';
import { Card, Input, Row, Col, Button, Dropdown, Slider, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { SlidersOutlined, SaveOutlined, UndoOutlined } from '@ant-design/icons';
import '../styles/Listings.css';

const { Meta } = Card;

const Listings = () => {
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sqFtRange, setSqFtRange] = useState([0, 5000]);
  const [listings, setListings] = useState([
    {
        key: '1',
        title: 'Beautiful Family House',
        address: '1234 Main St, Springfield, IL',
        price: '$400,000',
        beds: 3,
        baths: 2,
        sqft: 2000,
        image: '/images/1.jpg',
        slug: 'beautiful-family-house',
      },
      {
        key: '2',
        title: 'Modern Apartment',
        address: '5678 Elm St, Metropolis, NY',
        price: '$300,000',
        beds: 2,
        baths: 1,
        sqft: 1200,
        image: '/images/2.jpeg',
        slug: 'modern-apartment',
      },
      {
        key: '3',
        title: 'Cozy Cottage',
        address: '9101 Pine St, Smalltown, TX',
        price: '$250,000',
        beds: 2,
        baths: 2,
        sqft: 1500,
        image: '/images/3.jpg',
        slug: 'cozy-cottage',
      },
      {
        key: '4',
        title: 'Luxurious Villa',
        address: '1213 Oak St, Beverly Hills, CA',
        price: '$1,200,000',
        beds: 5,
        baths: 4,
        sqft: 4500,
        image: '/images/4.jpg',
        slug: 'luxurious-villa',
      },
      {
        key: '5',
        title: 'Charming Bungalow',
        address: '1415 Maple St, Oakwood, GA',
        price: '$350,000',
        beds: 3,
        baths: 2,
        sqft: 1800,
        image: '/images/5.webp',
        slug: 'charming-bungalow',
      },
  ]);

  const handleSave = () => {
    console.log('Filters saved');
  };

  const handleUndo = () => {
    setPriceRange([0, 1000000]);
    setSqFtRange([0, 5000]);
  };

  const menu = (
    <div className="dropdown-menu">
      <div className="dropdown-item">
        <label>Beds:</label>
        <InputNumber min={0} max={10} defaultValue={0} style={{ width: '100%' }} />
      </div>
      <div className="dropdown-item">
        <label>Bathrooms:</label>
        <InputNumber min={0} max={10} defaultValue={0} style={{ width: '100%' }} />
      </div>
      <div className="dropdown-item">
        <label>Price Range:</label>
        <Slider
          range
          min={0}
          max={1000000}
          defaultValue={priceRange}
          onChange={setPriceRange}
          tipFormatter={(value) => `$${value}`}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <InputNumber
            min={0}
            max={1000000}
            value={priceRange[0]}
            onChange={(value) => setPriceRange([value, priceRange[1]])}
          />
          <InputNumber
            min={0}
            max={1000000}
            value={priceRange[1]}
            onChange={(value) => setPriceRange([priceRange[0], value])}
          />
        </div>
      </div>
      <div className="dropdown-item">
        <label>Sq Ft Range:</label>
        <Slider
          range
          min={0}
          max={5000}
          defaultValue={sqFtRange}
          onChange={setSqFtRange}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <InputNumber
            min={0}
            max={5000}
            value={sqFtRange[0]}
            onChange={(value) => setSqFtRange([value, sqFtRange[1]])}
          />
          <InputNumber
            min={0}
            max={5000}
            value={sqFtRange[1]}
            onChange={(value) => setSqFtRange([sqFtRange[0], value])}
          />
        </div>
      </div>
      <div className="dropdown-buttons">
        <Button icon={<SaveOutlined />} onClick={handleSave} style={{ marginRight: 10 }}>
          Save
        </Button>
        <Button icon={<UndoOutlined />} onClick={handleUndo}>
          Undo
        </Button>
      </div>
    </div>
  );

  return (
    <CustomLayout>
      <h1>Listings</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <Input.Search
          placeholder="Search by address, zip code, or school"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, marginRight: 10 }}
        />
        <Dropdown
          overlay={menu}
          trigger={['click']}
          overlayClassName="custom-dropdown"
        >
          <Button icon={<SlidersOutlined />} />
        </Dropdown>
      </div>
      <Row gutter={[16, 16]}>
        {listings.map((listing) => (
          <Col xs={24} sm={12} md={8} lg={6} key={listing.key}>
            <Card
              hoverable
              cover={
                <div className="listing-image-wrapper">
                  <img src={listing.image} alt={listing.title} className="listing-image" />
                  <Link to={`/listings/${listing.slug}`}>
                    <button className="view-details-button">View Details</button>
                  </Link>
                </div>
              }
            >
              <Meta title={listing.title} />
              <p>{listing.address}</p>
              <Row>
                <Col span={12}>
                  <p>Price: {listing.price}</p>
                  <p>Beds: {listing.beds}</p>
                </Col>
                <Col span={12}>
                  <p>Baths: {listing.baths}</p>
                  <p>Sq Ft: {listing.sqft}</p>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </CustomLayout>
  );
};

export default Listings;
