
 getPost();

function getPost(){
    console.log("get");
    const postId = localStorage.getItem("postId");

    let xhr = new XMLHttpRequest();    
    xhr.open("GET", "http://ec2.istruly.sexy:792/post/"+postId, false);
    xhr.send();

    if(xhr.status === 200){
        alert("조회 성공");
        const post = JSON.parse(xhr.response);
        console.log(post);

        checkPost(post.title, post.content);
        checkComment(post.comments);
    }
    else if(xhr.status === 204){
        alert("게시글 없음");
    }
    else if(xhr.status === 403){
        alert("권한 없음")
    }
}

function checkPost(title, content) {         //post조회   
    const titleEle = document.getElementById("title");
    const contentEle = document.getElementById("content");

    titleEle.innerText = title;
    contentEle.innerText = content;
}

function checkComment(comments){        //comment조회
    let id = document.getElementsByClassName("id");
    let comment_ = document.getElementsByClassName("comment");
    const tbody = document.getElementById("tableBody");

    for(let comment of comments){
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${comment.author}<td>
            <td>${comment.content}<td>
            `
        tbody.appendChild(tr);
    }
}

function delPost() {
    const postId = localStorage.getItem("postId");
    const JWT =localStorage.getItem('JWT');

    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", " http://ec2.istruly.sexy:792/post/"+postId, false);
    xhr.setRequestHeader("Authorization","Bearer "+JWT);
    xhr.send();

    if(xhr.status === 201){
        alert("삭제 성공");
        location.href="../main/main.html";
    }
    else if(xhr.status === 204){
        alert("개시글 없음");
    }
    else if(xhr.status === 403){
        alert("권한 없음");
    }
}

function postComment(){
    const postId = localStorage.getItem("postId");
    const JWT =localStorage.getItem('JWT');
    
    const comment = document.getElementById("commentWri").value;
    let xhr = new XMLHttpRequest();

    const mention = {
        "content": comment
    };
    console.log(mention.content);

    xhr.open("POST","http://ec2.istruly.sexy:792/comment/"+postId, false);
   
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader('Authorization', "Bearer "+JWT);
    xhr.send(JSON.stringify(mention));

    if(xhr.status === 201){
     alert("댓글 작성 완료");
     }
    else if(xhr.status === 204){
        alert("개시글 없음");
    }
    else if(xhr.status === 403){
        alert("권한 없음");
    }
}

