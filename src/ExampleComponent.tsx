import {useCurrentUser, type CurrentUser} from '@sanity/sdk-react'
import './ExampleComponent.css'

export function ExampleComponent() {
  const user: CurrentUser | null = useCurrentUser()

  return (
    <div className="example-container">
      {user?.profileImage ? (
        <div className="example-avatar-container">
          <img src={user.profileImage} alt="" className="example-avatar" />
        </div>
      ) : (
        ''
      )}
      <h1 className="example-heading">
        sxniti xxp me swagjxm{user?.name ? `, ${user.name}` : ''}!
      </h1>
      <p className="example-text">
        ye ek eksample kmponxnt v zise xxp sdk ke <code>useCurrentUser</code> hook qwara  render kiya v. xpne kmponxnts ko App.tsx me import krke ise riples kre.
      </p>
      <div className="code-hint">
        <p>
          xcCa xgla stxp fxcing kntxnt v. dxta vuks laik <code>useDocuments</code> suspend
          while loading, so render them inside a <code>{'<Suspense>'}</code> boundary:
        </p>
        <pre>{`import {Suspense} from 'react'
import {useDocuments} from '@sanity/sdk-react'

function DocumentList() {
  // useDocuments returns handles you can pass to other hooks
  const {data} = useDocuments({documentType: 'yourType'})
  return <ul>{data.map((doc) => <li key={doc.documentId}>{doc.documentId}</li>)}</ul>
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DocumentList />
    </Suspense>
  )
}`}</pre>
      </div>
      <ul className="example-links">
        <li>
          <a href="https://www.sanity.io/docs/app-sdk">xxp sdk dokyumentesn</a>
        </li>
        <li>
          <a href="https://reference.sanity.io/_sanity/sdk-react/">xpi refrens</a>
        </li>
        <li>
          <a href="https://sdk-explorer.sanity.io">sdk eksplorxr wiQ eksample xxps</a>
        </li>
      </ul>
    </div>
  )
}
