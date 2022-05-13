import React, { Component } from 'react';
import Image from 'next/image'
import LogoAndName from '/components/shared/LogoAndName';
import { List, Avatar, Button } from 'antd';

const items = [
    {
      title: 'Add your own camp suggestions.',
    },
    {
      title: 'Leave reviews and experiences.',
    },
    {
      title: 'See locations for all camps.',
    },
];

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <div style={styles.informationContainer}>
                        <div style={styles.information}>
                            <LogoAndName />
                            <p style={styles.informationTitle}>
                                Explore the best camps on Earth.
                            </p>
                            <p>
                                YelpCamp is a curated list of the best camping
                                spots on Earth. Unfiltered and unbiased reviews.
                            </p>
                            <List
                                itemLayout="horizontal"
                                dataSource={items}
                                renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                    avatar={<Avatar src="/Assets/Checkmark.svg" />}
                                    title={item.title}
                                    />
                                </List.Item>
                                )}
                                style={styles.informationList}
                            />
                            <Button type="primary">View Campgrounds</Button>
                            <div>
                                <p>Partnered with: </p>
                                <img
                                    src="/Assets/Airbnb.svg"
                                    alt="Airbnb"
                                />
                                <img
                                    src="/Assets/Booking.svg"
                                    alt="Booking"
                                />
                                <img
                                    src="/Assets/Plum Guide.svg"
                                    alt="Plum Guide"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={styles.image}>
                        <img
                            style={styles.image}
                            src="/Assets/Hero Image.jpg"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        )
    }
}


const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        fontSize: "16px"
    },

    informationContainer: {
        margin: "20px",
    },

    information: {
        margin: "50px"
    },

    informationTitle: {
        fontWeight: "bold",
        fontSize: "50px",
        lineHeigh: "2"
    },

    informationList: {
        margin: "10px 0"
    },

    image: {
        width: "100%",
        heigh: "100%"
    }
    
  }

export default Landing;