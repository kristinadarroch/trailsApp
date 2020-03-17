import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import ExploreContainer from '../../components/ExploreContainer';

const Trails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Trails</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Trails</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Back 40" subtitle="Bella Vista"/>
        <ExploreContainer name="Blowing Springs" subtitle="Bella Vista"/>
        <ExploreContainer name="Little Sugar" subtitle="Bella Vista"/>
        <ExploreContainer name="Coler" subtitle="Bentonville"/>
        <ExploreContainer name="Hobbs" subtitle="Rogers"/>
        <ExploreContainer name="Kessler Mountain" subtitle="Fayetteville"/>
        <ExploreContainer name="Lake Atalanta" subtitle="Rogers"/>
        <ExploreContainer name="Lake Fayetteville" subtitle="Fayetteville"/>
        <ExploreContainer name="Lake Leatherwood" subtitle="Eureka Springs"/>
        <ExploreContainer name="Passion Play" subtitle="Eureka Springs"/>
        <ExploreContainer name="Railyard" subtitle="Rogers"/>
        <ExploreContainer name="Slaughter Pen" subtitle="Bentonville"/>
        <ExploreContainer name="Two Rivers" subtitle="Highlandville, MO"/>
        <ExploreContainer name="Upper Buffalo" subtitle="Ponca"/>
      </IonContent>
    </IonPage>
  );
};

export default Trails;
