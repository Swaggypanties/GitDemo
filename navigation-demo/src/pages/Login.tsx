import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useIonRouter } from '@ionic/react';
import './Home.css';

const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/app','forward', 'replace');
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Cool Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton onClick={() => doLogin()} expand="full">
            Login
        </IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Ready to start your journey?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;