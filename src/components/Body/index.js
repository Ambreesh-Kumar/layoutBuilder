// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const displayContent = showContent
        ? 'content-bg-container'
        : 'display-none'
      const displayLeftNavbar = showLeftNavbar
        ? 'left-navbar-bg-container'
        : 'display-none'
      const displayRightNavbar = showRightNavbar
        ? 'right-navbar-bg-container'
        : 'display-none'

      return (
        <div className="body-bg-container">
          <div className={displayLeftNavbar}>
            <h1 className="left-navbar-heading">Left Navbar Menu</h1>
            <ul className="left-navbar-unordered-list">
              <li className="left-navbar-list">Item 1</li>
              <li className="left-navbar-list">Item 2</li>
              <li className="left-navbar-list">Item 3</li>
              <li className="left-navbar-list">Item 4</li>
            </ul>
          </div>
          <div className={displayContent}>
            <h1 className="content-heading">Content</h1>
            <p className="content-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={displayRightNavbar}>
            <h1 className="right-navbar-heading">Right Navbar</h1>
            <div className="right-navbar-box-container">
              <div className="right-navbar-box">
                <h1 className="right-navbar-box-heading">Ad 1</h1>
              </div>
              <div className="right-navbar-box">
                <h1 className="right-navbar-box-heading">Ad 2</h1>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
