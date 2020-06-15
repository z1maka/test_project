import React from 'react';
import Nav from '../Nav';
import styles from '../../../static/styles/another.scss';
import background from '../../../static/assets/saler.jpg';
import styled from "styled-components";
import notFound from "../../../static/assets/not_found.png";

const Component = () => {
    return (
        <>
            <Nav />
            <div className={styles.zzz}>
                <p>ANotherPage</p>
                <p>ANotherPage</p>
                <p>ANotherPage</p>
                <p>ANotherPage</p>
                <p>ANotherPage</p>
                <Image src={background} alt="bg" />
                <NotFound />
            </div>
        </>
    );
};

const Image = styled.img`
    width: 100%;
`;

const NotFound = styled.div`
    z-index: 200;
    width: 300px;
    height: 300px;
    background: url('${notFound}') no-repeat center;
`;

export default Component;
