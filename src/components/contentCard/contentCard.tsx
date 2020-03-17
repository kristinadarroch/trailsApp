import React from 'react';
import './contentCard.css';

interface ContainerProps {
  name: string;
}

const ContentCard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div>
        <p>does this show up</p>
    </div>
  );
};

export default ContentCard;