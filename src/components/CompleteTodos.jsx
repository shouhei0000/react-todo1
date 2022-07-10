import React from 'react';

export const CompleteTodos = (props)=> {
    const { todo, onClickBack} = props;  //データを受け取りpropsへ代入
    return(
        <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
            {todo.map((todo, index) => {
                return(
            <div key={todo}  className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
                    
                )
            })}
            <div className="list-row">
            </div>
        </ul>
    </div>
    )
}