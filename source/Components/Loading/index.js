import React from 'react';

// пропсы передаваемые лодаблом
const Index = ({ error, timedOut, pastDelay, retry }) => {
    if (error) {
        return (
            <div>
                <p>Error...</p>
                <button onClick={retry}>Retry</button>
            </div>
        );
    } else if (timedOut) {
        return (
            <div>
                <p>Taking a long time</p>
                <button onClick={retry}>Retry</button>
            </div>
        );
    } else if (pastDelay) {
        return <div>Loading...</div>;
    }
    return null;
};

export default Index;
