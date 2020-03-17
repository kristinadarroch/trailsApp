import React from 'react';
import './ExploreContainer.css';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';

interface ContainerProps {
  name: string;
  subtitle?: string;
  img?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, subtitle }) => {
  return (
    <IonCard routerLink="/trailPage">
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default ExploreContainer;
