// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  const appURLs ={
    'airbrainaiassistants': '/assistants/assistants.html',

  }

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-name">{appName}</p>
      <p><a href="/assistants/assistants.html">Try</a></p>
    </li>
  )
}

export default AppItem
