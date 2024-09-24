import { IonBackButton, IonButton, 
    IonButtons,
       IonContent,
        IonHeader,
         IonMenuButton,
          IonPage,
           IonTitle,
            IonToolbar,
           } from '@ionic/react';
  import './Home.css';
  
  const Details: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
              <IonButtons slot='start'>
                  <IonBackButton defaultHref='/app/page1'></IonBackButton>
              </IonButtons>
            <IonTitle>My Details</IonTitle>
          </IonToolbar>
              <IonTitle size="large">Details</IonTitle>
          </IonHeader>
          <IonContent className='ion-padding'>
            <IonButton routerLink="/app/page1" expand="full">
            Go Back
            </IonButton>
          </IonContent>
  
      </IonPage>
    );
  };
  
  export default Details;