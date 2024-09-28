import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
    const [showDelayedText, setShowDelayedText] =
        useState(false);

    const handleClick = () => {
        setTimeout(() => {
            setShowDelayedText(true);
        }, 1000);
    };

    return (
        <Flex justifyContent={'center'} alignContent={'center'}>
            <div className="container">
                <h1 className="heading">
                    Geeksforgeeks
                </h1>
                <div className="content">
                    <p className="initialText">
                        This is the initial text.
                    </p>
                    <button className="button"
                        onClick={handleClick}>
                        Show Text
                    </button>
                    {showDelayedText && (
                        <p className="delayedText">
                            This text appears after a delay.
                        </p>
                    )}
                </div>
            </div>
        </Flex>
    );
}

export default App
