// リスト追加
function addList() {
    const el = document.createElement('li');
    el.innerHTML = '<button type="button" name="remove-list" onclick="removeList(this)" class="todo-remove-btn">🗑</button><input type="text" placeholder="タスクを入力してください">';
    el.classList.add('list-content');

    document.querySelector('ul.list-contents').appendChild(el);
}

// リスト削除
function removeList(el) {
    el.parentElement.remove()
}
