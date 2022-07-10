import React from "react";
import "./style.css";
import { useState } from "react";
import {InputTodo} from './components/InputTodo';   //コンポーネント化用のファイル
import {IncompleteTodos} from './components/IncompleteTodos';   //未完了処理をコンポーネント化
import {CompleteTodos} from './components/CompleteTodos';

export const App = () => {

    //↓↓usestateは第一引数に現在の値を表示する変数を定義、第２引数に現在の状態を更新する関数を定義usestateの引数には初期値を定義する
    const [todoText, setTodoText] = useState('');   //
    const [incompleteTodos, setInCompleteTodo] = useState([]);  //未完了のtodoをincompletetodoで定義
    const [completeTodos, setInCompleteTodos] = useState([]);  //完了のtodoをcompletetodoで定義
    //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    const onChangeTodoText = (event) => setTodoText(event.target.value);  //イベント発生時にその返り値を代入
    const onClickAdd = () => {         //新規テキスト追加時
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];     //定数newTodosにスプレッド構文にてincompleteTodosの中身にtodotextを追加
        setInCompleteTodo(newTodos)  //新規追加されたnewtodosを関数呼び出し後更新
        setTodoText("");   //空文字を指定でテキストエリアを追加後リセット
    }

    const onClickDelete = (index) =>{              //要素を削除するための定数
        const newTodos = [...incompleteTodos];     //未完了todoを一つずつ取り出し新しい定数に代入
        newTodos.splice(index,1)                   //現在設定されている未完了のtodoを一つずつ取り出し削除する
        setInCompleteTodo(newTodos)                 //現在の未完了todoを削除後再生成
    }

    const onClickComplete = (index)=> {           //todoの完了ボタンを管理する定数.indexで要素の番号と特定を実施
        const newIncompleteTodos = [...incompleteTodos];    //定数に現在の未完了todoを代入
        newIncompleteTodos.splice(index, 1);         //現在設定されている未完了要素で押された要素をspliceにて削除

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];  //完了に現在の完了todoプラス未完了にセッテオ
        setInCompleteTodo(newIncompleteTodos);
        setInCompleteTodos(newCompleteTodos);
    }

    const onClickBack = (index)=> {                 //完了内にあるtodoを戻るボタンを押したとき
        const newCompleteTodos = [...completeTodos];    //現在の完了todoを代入
        newCompleteTodos.splice(index, 1);             //完了ないにある要素を削除

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];  //現在の未完了todoに完了todoから指定された要素を追加
        setInCompleteTodos(newCompleteTodos);    //完了要素に現在の完了todoを再生成
        setInCompleteTodo(newIncompleteTodos);   //未完了のtodoに戻るボタンを代入したあとの要素を再生成
    }
    return (
        <>

         {/*↓↓InputTodoにpropsとしてデータを渡している */}
        <InputTodo todoText={todoText} onChange ={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5 }/>  {/*inputtodoの実行 */}
        {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}
        {incompleteTodos.length >= 5 && <p style={{color: 'red'}}>登録できるtodo5個まで　消化しようね</p>}
        

        {/* 未完了のtodoリスト コンポーネント化しpropsを渡している*/}
        <IncompleteTodos  todo={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
        {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}

        {/* 完了のtodoリスト コンポーネント化しpropsを渡している */}
        <CompleteTodos todo={completeTodos} onClickBack={onClickBack}/>
        {/*↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑*/}
        </>
    )
}