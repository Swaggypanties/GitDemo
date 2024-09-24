import { IonButton, 
  IonButtons,
     IonContent,
      IonHeader,
       IonMenuButton,
        IonPage,
         IonTitle,
          IonToolbar,
         } from '@ionic/react';
import './Home.css';

const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonMenuButton></IonMenuButton>
            </IonButtons>
          <IonTitle>Page1</IonTitle>
        </IonToolbar>
            <IonTitle size="large">Page1</IonTitle>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonButton routerLink="/app/Page1/details" expand="full">
          Go deeper!
          </IonButton>
        </IonContent>

    </IonPage>
  );
};

export default Page1;