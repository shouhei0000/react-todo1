//app.jsxをコンポーネント化するファイル

import React from 'react';


export const InputTodo = (props)=> {
    const { todoText, onChange, onClick } = props;   //親コンポーネントからpropsを受け取り自ファイルで使用
    return(
        <div className="input-area">
          <input placeholder="TODOを入力" value={todoText} onChange={onChange}/>
          <button onClick={onClick}>追加</button>
        </div>
    );
};