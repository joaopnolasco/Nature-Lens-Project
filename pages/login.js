// pages/login.js
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function GoogleLoginComponent() {
  return (
    <GoogleOAuthProvider clientId="SUA_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Erro no login');
        }}
      />
    </GoogleOAuthProvider>
  );
}
