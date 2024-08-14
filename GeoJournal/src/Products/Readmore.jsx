import React,{ useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <p>
      {displayText}
      {text.length > maxLength && (
        <span onClick={toggleReadMore} style={{ color: 'brown', cursor: 'pointer', marginLeft: '5px' }}>
          {isExpanded ? 'Read Less' : '......Read More'}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
