import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <div className="header">
        <LanguageIcon />
        <h2>parolla</h2>
        <SettingsIcon />
    </div>
  )
}

export default Header