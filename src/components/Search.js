import React from 'react'

export default function Search() {

  
  return (
    <form className="google-search" action="https://www.google.com/search" method="get" name="searchform" target="_blank">
      <input name="sitesearch" type="hidden" />
      <input autoComplete="on" name="q" placeholder="Must see in..." type="text" />
    </form>
  )
}