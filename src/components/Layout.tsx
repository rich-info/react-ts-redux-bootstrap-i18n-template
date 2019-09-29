import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import GoToTop from './GoToTop';
import './Layout.css';

const GreyLineBottom = () => (
    <hr
        style={{
            position: "fixed",
            left: 0,
            height: 0,
            width: "100%",
            border: "2px solid grey",
            margin: 0,
            zIndex: 1030,
            bottom: 0
        }}
    />
);

const Layout = (props: any) => (
    <>
        <div>
            <NavMenu />
            <Container>
                {props.children}
                <footer>
                    <div className="float-left">
                        <br />
                        &copy; 2019 - MoWeTec
                        <br />
                        <br />
                    </div>
                </footer>
            </Container>
        </div>
        <GreyLineBottom />
        <GoToTop />
    </>
);

export default Layout;
