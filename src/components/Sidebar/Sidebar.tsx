import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({postLists}: any) => {

  const clickHandler = () => {
    console.log("Hello!!!")
  }

  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>Articles</h2>
      <ul className='sidebar__list'>
          <>{postLists.map((post: any) => {
              return (<li key={post.id} className='sidebar__item'>
                        <Link className='sideBarLink' to={'/'} onClick={() => clickHandler()}>
                          {post.title} - {post.date}
                        </Link>  
                      </li>)
          })}</>
      </ul>
    </div>
  )
}

export default Sidebar