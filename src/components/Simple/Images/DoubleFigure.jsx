import './Images.css';
import { Children, cloneElement } from 'react';

function DoubleFigure({children}) {

  let clonedChildren = Children.map(children, (child) => {
    return cloneElement(child, {size: 'full'});
  });

  return (
    <div className='os101_simpleDoubleFigure'>
      {clonedChildren.map((child) => {return <div className="os101_simpleDoubleFigure_column">{child}</div>})}
    </div>
  );
  
}

export default DoubleFigure