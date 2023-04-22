import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Kajal Jaiswal, {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer