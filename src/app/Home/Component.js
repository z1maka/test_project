import style from '../../../static/styles/main.scss';
import React from 'react';
import styled from 'styled-components';
import background from '../../../static/assets/saler.jpg';
import notFound from '../../../static/assets/not_found.png';
import Nav from '../Nav';

const Index = () => {
    console.log('__ENV__', __ENV__);
    console.log('__PROD__', __PROD__);
    console.log('__DEV__', __DEV__);
    console.log('__STAGE__', __STAGE__);

    return (
        <>
            <Nav />
            <Block>
                <h2>My first</h2>
                <p>PARAGRAPH</p>
                <p>{`Count`}</p>
                <ButtonBlock>
                    <Button>+</Button>
                    <Button>-</Button>
                </ButtonBlock>
                <Image src={background} alt="bg" />
                <NotFound />
                <div className={style.myClass} />
            </Block>
        </>
    );
};

const NotFound = styled.div`
    z-index: 200;
    width: 300px;
    height: 300px;
    background: url('${notFound}') no-repeat center;
`;

const ButtonBlock = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;
    margin: 10px 0;
`;

const Image = styled.img`
    width: 100%;
`;

const Button = styled.span`
    padding: 10px;
    border-radius: 5px;
    width: 30px;
    cursor: pointer;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: aliceblue;
`;

const Block = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: tomato;
`;

export default Index;
