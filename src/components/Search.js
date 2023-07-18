import React from 'react'

export default function Search(props) {

  return (
    <form className="google-search" action="https://www.google.com/search" method="get" name="searchform" target="_blank">
      <input name="sitesearch" type="hidden" />
      <input autoComplete="off" name="q" placeholder={`Must see in ${props.searchParam ? props.searchParam : "Tokyo"}...`} type="text" />
    </form>
  )
}