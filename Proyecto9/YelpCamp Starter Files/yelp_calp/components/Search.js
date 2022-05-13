import React, { Component } from 'react';
import Image from 'next/image'
import LogoAndName from '/components/shared/LogoAndName';
import { List, Avatar, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.creators}>
                    This project was mede by <a>Colt Steele</a> and designed by 
                    <a>Codewell</a>
                </div>
                <div style={styles.conteiner}>
                    <header style={styles.header}>
                        <div style={styles.elements_in_colums}>
                            <LogoAndName />
                            <p>
                                <a>Home</a>
                            </p>
                        </div>
                        <div style={styles.header_two}>
                            <div style={styles.elements_in_colums}>
                                <p>Luciano</p>
                                <p>
                                    <a>Logout</a>
                                </p>
                            </div>
                        </div>
                    </header>
                    <div style={styles.card_welcome}>
                        <div style={styles.card_welcome_inside}>
                            <p style={styles.card_welcome_tittle}>Welcome to YelpCamp!</p>
                            <p style={styles.card_welcome_description}>
                                View our hand-picked campground from all 
                                over the world, or add your own.
                            </p>
                            <div style={styles.card_welcome_form}>
                                <Input
                                    prefix={<SearchOutlined />}
                                    type="text"
                                    placeholder='Search for camps'
                                    size="large"
                                    style={styles.card_welcome_form_input}/>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={styles.card_welcome_form_button}>
                                    Search
                                </Button>
                            </div>
                            <p style={styles.card_welcome_link}>
                                <a >
                                    Or add your own campground
                                </a>
                            </p>
                        </div>
                    </div>
                    <main style={styles.cards}>
                        <div style={styles.card_campground}>
                            <img
                                src="/Assets/Camp Images/High Quality Images/Mount Ulap.png"
                                alt="Airbnb"
                            />
                            <p>Mount Ulap</p>
                            <p>
                                One of the most famous hikes in Benguet is 
                                Mt Ulpa in Itogon.
                            </p>
                            <Button>View Campground</Button>
                        </div>

                        <div style={styles.card_campground}>
                            <img
                                src="/Assets/Camp Images/High Quality Images/Calaguas Islands.jpg"
                                alt="Airbnb"
                            />
                            <p>Calaguas Islands</p>
                            <p>
                                One of the most famous hikes in Benguet is 
                                Mt Ulpa in Itogon.
                            </p>
                            <Button>View Campground</Button>
                        </div>

                        <div style={styles.card_campground}>
                            <img
                                src="/Assets/Camp Images/High Quality Images/Onay Beach.jpg"
                                alt="Airbnb"
                            />
                            <p>Onay Beach</p>
                            <p>
                                One of the most famous hikes in Benguet is 
                                Mt Ulpa in Itogon.
                            </p>
                            <Button>View Campground</Button>
                        </div>

                        <div style={styles.card_campground}>
                            <img
                                src="/Assets/Camp Images/High Quality Images/Seven Sisters Waterfall.jpg"
                                alt="Airbnb"
                            />
                            <p>Seven Sisters Waterfall</p>
                            <p>
                                One of the most famous hikes in Benguet is 
                                Mt Ulpa in Itogon.
                            </p>
                            <Button>View Campground</Button>
                        </div>

                        <div style={styles.card_campground}>
                            <img
                                src="/Assets/Camp Images/High Quality Images/Latik Riverside.jpg"
                                alt="Airbnb"
                            />
                            <p>Latik Riverside</p>
                            <p>
                                One of the most famous hikes in Benguet is 
                                Mt Ulpa in Itogon.
                            </p>
                            <Button>View Campground</Button>
                        </div>

                        <div style={styles.card_campground}>
                            <img
                                src="/Assets/Camp Images/High Quality Images/Buloy Springs.jpg"
                                alt="Airbnb"
                            />
                            <p>Buloy Springs</p>
                            <p>
                                One of the most famous hikes in Benguet is 
                                Mt Ulpa in Itogon.
                            </p>
                            <Button>View Campground</Button>
                        </div>
                    </main>
                    <footer>
                        <LogoAndName />
                    </footer>
                </div>
            </div>
        )
    }
}


const styles = {
    container: {
        maxWidth: "1440px"
    },
    creators: {
        display: "flex",
        justifyItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
        fontSize: "17px",
        padding: "5px"
    },
    conteiner: {
        margin: "30px"
    },
    header: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    header_one: {
        display: "grid",
    },
    header_two: {
        // display: "flex",
        // flexDirection: "colum",
        // alignItems: "flex-end",
        display: "grid",
        justifyContent: "end",
    },
    elements_in_colums: {
        display: "flex",
        flexDirection: "colum",
    },
    card_welcome: {
        backgroundColor: "#f9f6f1",
        borderRadius: "10px",
        display: "grid",
        // gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateColumns: "40% 60%",

    },
    card_welcome_inside: {
        padding: "30px",
    },
    card_welcome_tittle: {
        fontSize: "35px",
        fontWeight: "bold",
        marginBottom: "0px"
    },
    card_welcome_description: {
        fontSize: "17px"
    },
    card_welcome_form: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "15px"
    },
    card_welcome_form_input: {
        gridColumn: "1 / 3",
        // padding: "10px",
        borderRadius: "5px",
    },
    card_welcome_form_button: {
        // padding: "10px",
        borderRadius: "5px",
    },
    card_welcome_link: {
        marginTop: "15px",
    },
    cards: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "25px"
    },
    card_campground: {
        
    },
    
}

export default Search;