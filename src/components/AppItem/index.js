// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p className="app-name">{appName}</p>
      <p><a href={`/signinup.html?app=${appName}`}>Try</a></p>
    </li>
  )
}

export default AppItem
