// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }

      const onChangeShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-bg-container">
          <h1 className="configuration-controller-main-heading">Layout</h1>
          <div className="checkbox-bg-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox-1"
                className="checkbox-input"
                checked={showContent ? 'checked' : ''}
                onChange={onChangeShowContent}
              />
              <label htmlFor="checkbox-1" className="checkbox-label">
                Content
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox-2"
                className="checkbox-input"
                checked={showLeftNavbar ? 'checked' : ''}
                onChange={onChangeShowLeftNavbar}
              />
              <label htmlFor="checkbox-2" className="checkbox-label">
                Left Navbar
              </label>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="checkbox-3"
                className="checkbox-input"
                checked={showRightNavbar ? 'checked' : ''}
                onChange={onChangeShowRightNavbar}
              />
              <label htmlFor="checkbox-3" className="checkbox-label">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
