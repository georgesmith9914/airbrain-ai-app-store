// Write your code here
import './index.css'
import appURLs from './app-links.json';

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails

  console.log(appURLs)

  
function getAppURL(localAppId) {
  console.log("LocalappId:", localAppId.appId, process.env.REACT_APP_ENVIRONMENT);
  console.log("appURLs:", appURLs);
  let env = "";
  if(process.env.REACT_APP_ENVIRONMENT === "DEV") {
    env = "DEV"
  }else{
    env = "PROD"
  }
  console.log(env)
  const envSpecificAppURLs = appURLs[env];
  console.log(process.env.REACT_APP_ENVIRONMENT);
  console.log("envSpecificAppURLs:", envSpecificAppURLs);
  return envSpecificAppURLs[localAppId.appId]
}


  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p>App ID: {appId}</p>
      <p className="app-name">{appName}</p>
      <p><a href={getAppURL({appId})}>Try</a></p>
    </li>
  )
}

export default AppItem
