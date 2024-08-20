import { createElement, cloneElement } from 'react';
import {Link, useParams} from 'react-router-dom';
import toc from '../../../../toc.json';
import './Simple.css';

function SimpleSidebar(content) {

  let contentElement, contentHeadings;

  if(content) {
    if(content.content.current) {
      console.log(content.content.current);
    }
    
  }

  const params = useParams();
  let idParam = params.id;
  let lidParam = params.lid;
  let lesson_data = [];

  let searchModules = toc.filter((child, i) => {
    return child.id == params.id;
  }).map((child) => {
    return child.lessons;
  });

  

  if(searchModules != null && searchModules.length == 1) {
    for (let key in searchModules[0]) {
      if (searchModules[0].hasOwnProperty(key)) {
        let lesson_id = searchModules[0][key].id;
        let lesson_name = searchModules[0][key].name;
        lesson_data.push([lesson_id, lesson_name]);
      }
    }
  }

  // console.log(lidParam);

  if(lesson_data.length <= 0) {
    return '';
  } else {
    
    if(lidParam != null) {

      return (<div className='os101SimpleSideBar'>
        <div className='os101SimpleLogo'><img src='./images/logo.png'/></div>
        <h2>All Content</h2>
        <ul>
            <li><Link to={'/Simple/' + idParam}>Welcome</Link></li>
            {
              lesson_data.map((child, index) => {
                return <li key={index}><Link to={'/Simple/' + idParam + '/' + child[0]}>{child[1]}</Link></li>
              })
            }
        </ul>
        <h2>Navigate Lesson</h2>
      </div>);
    } else {
      return (<div className='os101SimpleSideBar'>
        <div className='os101SimpleLogo'><img src='./images/logo.png'/></div>
        <h2>All Content</h2>
        <ul>
            <li><Link to={'/Simple/' + idParam}>Welcome</Link></li>
            {
              lesson_data.map((child, index) => {
                return <li key={index}><Link to={'/Simple/' + idParam + '/' + child[0]}>{child[1]}</Link></li>
              })
            }
        </ul>
      </div>);
    }
    
  }
  
}

export default SimpleSidebar