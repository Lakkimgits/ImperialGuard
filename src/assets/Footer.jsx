import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <footer className="ig-footer">
      <div className="ig-footer-content">
        <div className="ig-footer-left">
          <img src="/ImperialGuard/Images/IG_icon.png" alt="Imperial Guard Logo" className="ig-footer-logo" />
        </div>
        <div className="ig-footer-center">
          <span>
            © {new Date().getFullYear()} Mikalaeis &nbsp;|&nbsp; 
          </span>
        </div>
        <div className="ig-footer-right">
          <img src="/ImperialGuard/Images/IG_icon.png" alt="Imperial Guard Logo" className="ig-footer-logo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer