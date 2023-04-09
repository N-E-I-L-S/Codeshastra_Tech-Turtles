import React from 'react';
import ChatBot from 'react-simple-chatbot';
class Hello extends React.Component {
    render() {
        return (
            <div className="chatbot" style={{
                display: 'inline-block',
                paddingTop : '2rem',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '25%',
                height: '80vh',
            }}>
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: 'Hi',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            user: true,
                            trigger: '3',
                        },
                        {
                            id: '3',
                            message: 'how may i help you...',
                            trigger: '4',
                        },
                        {
                            id: '4',
                            user: true,
                            trigger: '5',
                        },
                        {
                            id: '5',
                            message: 'True that',
                            trigger: '6',
                        },
                        {
                            id: '6',
                            user: true,
                            trigger: '7',
                        },
                        {
                            id: '7',
                            message: 'Nice',
                            end: true,
                        }

                    ]}
                />
            </div>
        )
    }
}
export default Hello;
