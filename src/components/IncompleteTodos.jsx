import React from 'react';

export const IncompleteTodos = (props) => {
    const {todo, onClickComplete, onClickDelete} = props;  //未完了のtodoをコンポーネント化しapp.jsxからpropsを受け取る
    return(
        <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
            {todo.map((todo, index) => {
                return(
            <div key={todo} className="list-row">{/* keyを設定することによってreactによる再レンダリング時にどの要素を指定しているのかを明示する*/}
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
                )
            })}
        </ul>
    </div>
    )
}
