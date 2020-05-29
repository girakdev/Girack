/* components/ChatMessage.js */
    
import React, { Component } from 'react';
    
class ChatM extends Component {

  render() {
    const { message } = this.props;
    
    const justify = isRight ? 'justify-content-end' : 'justify-content-start';
    
    const messageBoxStyles = {
      maxWidth: '70%',
      flexGrow: 0
    };
    
    const messageStyles = {
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: 'pre-wrap'
    };
    
    return <div className={`w-100 my-1 d-flex ${justify}`}>
      <div style={messageBoxStyles}>
        <span className={`d-block text-secondary`} style={messageStyles}>
          {message}
        </span>
      </div>
    </div>
  }
  
}

export default ChatM;