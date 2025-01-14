import './Images.css';
import SingleFigure from './SingleFigure.jsx';
import { Children, cloneElement } from 'react';

function TripleFigure({children}) {

  let clonedChildren = Children.map(children, (child) => {
    return cloneElement(child, {size: 'full'});
  });

  return (
    <div className='os101_simpleTripleFigure'>
    {clonedChildren.map((child) => {return <div className="os101_simpleTripleFigure_column">{child}</div>})}
    </div>
  );
  
}

export default TripleFigure